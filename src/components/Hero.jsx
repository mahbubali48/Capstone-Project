function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14">
      <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-[#0068A8]">
            NYC Building Emissions Compliance
          </p>

          <h2 className="mt-3 max-w-4xl text-5xl font-bold leading-tight text-black">
            Local Law 97 Building Compliance Dashboard
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-700">
            Track building emissions, understand current and future compliance,
            and explore pathways toward lower emissions across New York City.
          </p>

          <div className="mt-6 flex flex-wrap gap-5 text-sm font-semibold">
            <a href="/map" className="text-[#0068A8] hover:underline">
              Explore Compliance Map →
            </a>

            <a href="/about-ll97" className="text-[#0068A8] hover:underline">
              Learn about Local Law 97 →
            </a>
          </div>
        </div>

        <div className="border-t-4 border-[#006B3C] bg-[#F7F8F6] p-6">
          <p className="text-sm font-bold uppercase tracking-wide text-[#0068A8]">
            Building Lookup
          </p>

          <h3 className="mt-2 text-2xl font-bold text-black">
            Search for a building
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600">
            Look up a building by address, BIN, or BBL.
          </p>

          <div className="mt-5">
            <input
              type="text"
              placeholder="Enter address, BIN, or BBL"
              className="w-full border border-gray-400 bg-white px-4 py-3 text-base text-black outline-none focus:border-[#0068A8]"
            />

            <button
              type="button"
              className="mt-3 w-full bg-[#006B3C] px-6 py-3 font-bold text-white transition hover:bg-[#004F2D]"
            >
              Search Buildings
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero