import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// Statuses use the same labels as BuildingDetail.jsx.
const STATUS = {
  Compliant: { color: '#006B3C' },
  'At Risk': { color: '#B3261E' },
}

const BOROUGHS = ['All', 'Manhattan', 'Brooklyn', 'Queens', 'Bronx', 'Staten Island']
const TYPES = ['All', 'Office', 'Multifamily', 'Hotel', 'Retail']

// If the building detail route in App.jsx is different, change it here.
const detailPath = (id) => `/buildings/${id}`

// MOCK DATA, copied from mockBuildingData in BuildingDetail.jsx. Keep the ids in
// sync with that file so each pin opens the matching detail page.
// x and y are percentages of the map area, only used to place the placeholder pins.
const mockBuildings = [
  {
    id: 1,
    address: '350 5th Ave',
    borough: 'Manhattan',
    buildingType: 'Office',
    emissions: 8420,
    limit: 7500,
    projected2030Limit: 6100,
    status: 'At Risk',
    projectedPenalty: '$241,000',
    x: 46,
    y: 42,
  },
  {
    id: 2,
    address: '30 Rockefeller Plaza',
    borough: 'Manhattan',
    buildingType: 'Office',
    emissions: 5780,
    limit: 6200,
    projected2030Limit: 5200,
    status: 'Compliant',
    projectedPenalty: '$0',
    x: 58,
    y: 34,
  },
]

function ComplianceMap() {
  const [query, setQuery] = useState('')
  const [borough, setBorough] = useState('All')
  const [type, setType] = useState('All')
  const [statuses, setStatuses] = useState({ Compliant: true, 'At Risk': true })
  const [selectedId, setSelectedId] = useState(null)

  const visible = mockBuildings.filter((b) => {
    const q = query.trim().toLowerCase()
    const matchesQuery = q === '' || b.address.toLowerCase().includes(q)

    return (
      matchesQuery &&
      (borough === 'All' || b.borough === borough) &&
      (type === 'All' || b.buildingType === type) &&
      statuses[b.status]
    )
  })

  const selected = visible.find((b) => b.id === selectedId) || null

  const toggleStatus = (key) =>
    setStatuses((prev) => ({ ...prev, [key]: !prev[key] }))

  const clearFilters = () => {
    setQuery('')
    setBorough('All')
    setType('All')
    setStatuses({ Compliant: true, 'At Risk': true })
  }

  const percent = selected
    ? Math.round((selected.emissions / selected.limit) * 100)
    : 0

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <p className="text-sm font-bold uppercase tracking-wider text-[#0068A8]">
          Compliance Map
        </p>

        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
          NYC Building Compliance Map
        </h1>

        <p className="mt-3 max-w-3xl text-gray-700">
          Search for a building, filter by borough, type, or compliance status,
          and select a building on the map to see how its emissions compare to
          its Local Law 97 limit.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-[280px_1fr_320px]">
          {/* Filters */}
          <aside className="border-t-4 border-[#006B3C] bg-[#F7F8F6] p-5">
            <h2 className="text-lg font-bold">Search and filters</h2>

            <label
              htmlFor="map-search"
              className="mt-4 block text-sm font-semibold"
            >
              Address
            </label>
            <input
              id="map-search"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter an address"
              className="mt-1 w-full border border-gray-400 bg-white px-3 py-2 text-black outline-none focus:border-[#0068A8]"
            />

            <label
              htmlFor="map-borough"
              className="mt-4 block text-sm font-semibold"
            >
              Borough
            </label>
            <select
              id="map-borough"
              value={borough}
              onChange={(e) => setBorough(e.target.value)}
              className="mt-1 w-full border border-gray-400 bg-white px-3 py-2 text-black outline-none focus:border-[#0068A8]"
            >
              {BOROUGHS.map((b) => (
                <option key={b}>{b}</option>
              ))}
            </select>

            <label
              htmlFor="map-type"
              className="mt-4 block text-sm font-semibold"
            >
              Building type
            </label>
            <select
              id="map-type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="mt-1 w-full border border-gray-400 bg-white px-3 py-2 text-black outline-none focus:border-[#0068A8]"
            >
              {TYPES.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>

            <fieldset className="mt-4">
              <legend className="text-sm font-semibold">
                Compliance status
              </legend>

              {Object.entries(STATUS).map(([label, s]) => (
                <label
                  key={label}
                  className="mt-2 flex items-center gap-2 text-sm"
                >
                  <input
                    type="checkbox"
                    checked={statuses[label]}
                    onChange={() => toggleStatus(label)}
                    className="h-4 w-4"
                  />
                  <span
                    className="inline-block h-3 w-3 rounded-full"
                    style={{ backgroundColor: s.color }}
                  />
                  {label}
                </label>
              ))}
            </fieldset>

            <button
              type="button"
              onClick={clearFilters}
              className="mt-6 w-full border border-[#006B3C] px-4 py-2 font-bold text-[#006B3C] transition hover:bg-[#006B3C] hover:text-white"
            >
              Clear filters
            </button>
          </aside>

          {/* Map */}
          <section aria-label="Map of buildings">
            <div
              className="relative h-[420px] border border-gray-300 bg-[#E8EEF0] lg:h-[560px]"
              style={{
                backgroundImage:
                  'linear-gradient(#d3dde0 1px, transparent 1px), linear-gradient(90deg, #d3dde0 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            >
              <p className="absolute left-3 top-3 bg-white/90 px-3 py-1 text-xs font-semibold text-gray-700">
                Map placeholder. The live map will load here.
              </p>

              {visible.map((b) => (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => setSelectedId(b.id)}
                  aria-label={`${b.address}, ${b.status}`}
                  className={`absolute h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0068A8] ${
                    selectedId === b.id ? 'ring-4 ring-[#0068A8]' : ''
                  }`}
                  style={{
                    left: `${b.x}%`,
                    top: `${b.y}%`,
                    backgroundColor: STATUS[b.status].color,
                  }}
                />
              ))}

              {visible.length === 0 && (
                <p className="absolute inset-0 flex items-center justify-center px-6 text-center font-semibold text-gray-700">
                  No buildings match these filters. Try clearing them.
                </p>
              )}
            </div>

            {/* Legend */}
            <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2 border border-gray-300 bg-white px-4 py-3 text-sm">
              <span className="font-bold">Legend</span>

              {Object.entries(STATUS).map(([label, s]) => (
                <span key={label} className="flex items-center gap-2">
                  <span
                    className="inline-block h-3 w-3 rounded-full"
                    style={{ backgroundColor: s.color }}
                  />
                  {label}
                </span>
              ))}
            </div>
          </section>

          {/* Selected building */}
          <aside className="border-t-4 border-[#0068A8] bg-[#F7F8F6] p-5">
            <h2 className="text-lg font-bold">Selected building</h2>

            {!selected ? (
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Select a building on the map to see its address, emissions, and
                compliance status here.
              </p>
            ) : (
              <div className="mt-3">
                <p className="text-xl font-bold">{selected.address}</p>
                <p className="text-sm text-gray-600">{selected.borough}</p>

                <span
                  className="mt-3 inline-block px-3 py-1 text-sm font-bold text-white"
                  style={{ backgroundColor: STATUS[selected.status].color }}
                >
                  {selected.status}
                </span>

                <dl className="mt-5 space-y-3 text-sm">
                  <div className="flex justify-between gap-3">
                    <dt className="text-gray-600">Building type</dt>
                    <dd className="font-semibold">{selected.buildingType}</dd>
                  </div>

                  <div className="flex justify-between gap-3">
                    <dt className="text-gray-600">Current emissions</dt>
                    <dd className="font-semibold">
                      {selected.emissions.toLocaleString()} tCO₂e
                    </dd>
                  </div>

                  <div className="flex justify-between gap-3">
                    <dt className="text-gray-600">Current limit</dt>
                    <dd className="font-semibold">
                      {selected.limit.toLocaleString()} tCO₂e
                    </dd>
                  </div>

                  <div className="flex justify-between gap-3">
                    <dt className="text-gray-600">2030 limit</dt>
                    <dd className="font-semibold">
                      {selected.projected2030Limit.toLocaleString()} tCO₂e
                    </dd>
                  </div>

                  <div className="flex justify-between gap-3">
                    <dt className="text-gray-600">Projected penalty</dt>
                    <dd className="font-semibold">
                      {selected.projectedPenalty}
                    </dd>
                  </div>
                </dl>

                <p className="mt-5 text-sm font-semibold">
                  {percent}% of current limit
                </p>
                <div className="mt-1 h-3 w-full bg-gray-200">
                  <div
                    className="h-3"
                    style={{
                      width: `${Math.min(100, percent)}%`,
                      backgroundColor: STATUS[selected.status].color,
                    }}
                  />
                </div>

                <Link
                  to={detailPath(selected.id)}
                  className="mt-6 block w-full bg-[#006B3C] px-6 py-3 text-center font-bold text-white transition hover:bg-[#004F2D]"
                >
                  View building details
                </Link>
              </div>
            )}
          </aside>
        </div>

        <p className="mt-6 text-xs text-gray-500">
          Prototype data shown for frontend development. Buildings will come
          from the backend during integration.
        </p>
      </main>

      <Footer />
    </div>
  )
}

export default ComplianceMap
