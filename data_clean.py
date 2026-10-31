# %% Setup
from pathlib import Path
import pandas as pd

try:
    BASE = Path(__file__).parent
except NameError:
    BASE = Path.cwd()
RAW = BASE / "raw"
CLEAN = BASE / "cleaned"
CLEAN.mkdir(exist_ok=True)

log = []

def log_step(step, df, note=""):
    log.append({"step": step, "rows": len(df), "cols": df.shape[1], "note": note})
    print(f"[{step}] rows={len(df):,} cols={df.shape[1]} {note}")

# %% Step 1: load LL84
ll84 = pd.read_csv(
    RAW / "ll84_2023_present.csv",
    dtype={
        "Property ID": str,
        "Parent Property ID": str,
        "NYC Borough, Block and Lot (BBL)": str,
        "NYC Building Identification Number (BIN)": str,
    },
    low_memory=False,
)

COLUMN_MAP = {
    "Property ID": "Property Id",
    "Parent Property ID": "Parent Property Id",
    "Postal Code": "Postcode",
    "Calendar Year": "year",
}
matched = [k for k in COLUMN_MAP if k in ll84.columns]
ll84 = ll84.rename(columns=COLUMN_MAP)
log_step("1 raw LL84 loaded", ll84, f"{len(matched)} of {len(COLUMN_MAP)} columns renamed")

# %% Step 2: inspect
ll84.info(verbose=True, show_counts=True)
print(ll84["Year Ending"].head(10))
print(ll84["Year Ending"].value_counts().head(10))
print(ll84["NYC Borough, Block and Lot (BBL)"].str.len().value_counts(dropna=False))

# %%
bbl = ll84["NYC Borough, Block and Lot (BBL)"]
lens = bbl.str.len()
for n in [12, 13, 21, 25]:
    print(n, bbl[lens == n].drop_duplicates().head(3).tolist())


# %% Step 4: parse BBLs
import re

bbl_col = "NYC Borough, Block and Lot (BBL)"

# columns this step creates; dropped first so the cell is safe to rerun
ll84 = ll84.drop(columns=["row_id", "bbl_clean", "bbls_all", "n_bbls"], errors="ignore")
ll84["row_id"] = ll84.index

SEP = re.compile(r"[;,:\s]+")      # semicolon, comma, colon, or whitespace between BBLs

BOROUGH_LETTERS = {"m": "1", "x": "2", "k": "3", "q": "4", "s": "5"}

def normalize_one_bbl(x):
    """One BBL string -> 10-digit string (borough + 5-digit block + 4-digit lot), or NA."""
    if pd.isna(x):
        return pd.NA
    x = str(x).strip()
    x = re.sub(r"[/\u2013\u2014]", "-", x)             # slashes, en/em dashes -> hyphen

    candidate = None
    if "-" in x:
        parts = x.split("-")
        if len(parts) == 2 and len(parts[0]) == 6 and parts[0].isdigit() and parts[1].isdigit():
            parts = [parts[0][0], parts[0][1:], parts[1]]   # 307776-0026 -> 3, 07776, 0026
        if len(parts) == 3 and parts[0].lower() in BOROUGH_LETTERS:
            parts[0] = BOROUGH_LETTERS[parts[0].lower()]    # q-00872-0036 -> 4-00872-0036
        if len(parts) == 3 and all(p.isdigit() for p in parts):
            borough, block, lot = (int(p) for p in parts)   # int() drops extra leading zeros
            candidate = f"{borough}{block:05d}{lot:04d}"
    else:
        candidate = x

    if candidate is not None and candidate.isdigit() and len(candidate) == 10 and candidate[0] in "12345":
        return candidate

    # fallback: dashes in the wrong place, but the digits alone form a valid BBL
    digits = re.sub(r"\D", "", x)
    if len(digits) == 10 and digits[0] in "12345":
        return digits
    return pd.NA

# split each cell into individual BBL strings (cells with no digits become an empty list)
bbl_long = ll84[["row_id", bbl_col]].copy()
bbl_long["bbl_raw"] = bbl_long[bbl_col].map(
    lambda s: [p for p in SEP.split(re.sub(r"\s*-\s*", "-", s.strip())) if p]
              if isinstance(s, str) and any(ch.isdigit() for ch in s) else []
)
bbl_long = bbl_long.explode("bbl_raw")
bbl_long["bbl_clean"] = bbl_long["bbl_raw"].map(normalize_one_bbl)

# save everything that still can't be parsed, for inspection and slides
bad = bbl_long[bbl_long["bbl_clean"].isna()]
bad.to_csv(CLEAN / "ll84_bad_bbl_values.csv", index=False)

# keep valid BBLs, one row per (property-year, BBL)
bbl_long = bbl_long.dropna(subset=["bbl_clean"]).drop_duplicates(["row_id", "bbl_clean"])

# summarize back to one row per LL84 row
per_row = bbl_long.groupby("row_id").agg(
    bbl_clean=("bbl_clean", "first"),       # first valid BBL, for joining to other datasets
    bbls_all=("bbl_clean", ";".join),       # all valid BBLs, standardized
    n_bbls=("bbl_clean", "size"),
)
ll84 = ll84.join(per_row, on="row_id")

n_no_bbl = ll84["bbl_clean"].isna().sum()
n_not_avail = (ll84[bbl_col].str.strip() == "Not Available").sum()
print(len(bad), "unusable BBL values")
print(n_no_bbl, "rows with no valid BBL at all, of which", n_not_avail, "are 'Not Available'")
print(ll84["n_bbls"].value_counts().head(8))
log_step("4 BBLs parsed", ll84, f"{n_no_bbl} rows with no valid BBL")

# %%
