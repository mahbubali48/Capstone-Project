import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const mockBuildings = [
  {
    id: 1,
    address: '350 5th Ave',
    borough: 'Manhattan',
    bin: '1015862',
    bbl: '1008350041',
    emissions: '8,420',
    status: 'At Risk',
  },
  {
    id: 2,
    address: '30 Rockefeller Plaza',
    borough: 'Manhattan',
    bin: '1033423',
    bbl: '1012660001',
    emissions: '5,780',
    status: 'Compliant',
  },
  {
    id: 3,
    address: '1 Metrotech Center',
    borough: 'Brooklyn',
    bin: '3253481',
    bbl: '3020580001',
    emissions: '6,310',
    status: 'At Risk',
  },
  {
    id: 4,
    address: '120-55 Queens Blvd',
    borough: 'Queens',
    bin: '4071001',
    bbl: '4033000001',
    emissions: '3,940',
    status: 'Compliant',
  },
  {
    id: 5,
    address: '851 Grand Concourse',
    borough: 'Bronx',
    bin: '2002874',
    bbl: '2024610001',
    emissions: '4,870',
    status: 'Needs Review',
  },
]

function Buildings() {
  const [search, setSearch] = useState('')
  const [borough, setBorough] = useState('All')
  const [status, setStatus] = useState('All')

  const filteredBuildings = useMemo(() => {
    return mockBuildings.filter((building) => {
      const matchesSearch =
        building.address.toLowerCase().includes(search.toLowerCase()) ||
        building.bin.includes(search) ||
        building.bbl.includes(search)

      const matchesBorough =
        borough === 'All' || building.borough === borough

      const matchesStatus =
        status === 'All' || building.status === status

      return matchesSearch && matchesBorough && matchesStatus
    })
  }, [search, borough, status])

  const getStatusStyle = (buildingStatus) => {
    if (buildingStatus === 'Compliant') {
      return 'bg-green-100 text-green-800'
    }

    if (buildingStatus === 'At Risk') {
      return 'bg-red-100 text-red-800'
    }

    return 'bg-yellow-100 text-yellow-800'
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      <main>
        {/* Page Header */}
        <section className="border-b border-gray-200 bg-[#F7F8F6]">
          <div className="mx-auto max-w-7xl px-6 py-12">
            <p className="text-sm font-bold uppercase tracking-wider text-[#0068A8]">
              Building Directory
            </p>

            <h1 className="mt-2 text-4xl font-bold text-black">
              Explore Covered Buildings
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-7 text-gray-700">
              Search and filter buildings affected by Local Law 97 to review
              building identifiers, emissions information, and current
              compliance status.
            </p>
          </div>
        </section>

        {/* Search + Filters */}
        <section className="mx-auto max-w-7xl px-6 py-10">
          <div className="border border-gray-300 bg-white p-6">
            <div className="grid gap-5 lg:grid-cols-[2fr_1fr_1fr]">
              <div>
                <label
                  htmlFor="building-search"
                  className="mb-2 block text-sm font-bold text-black"
                >
                  Search Buildings
                </label>

                <input
                  id="building-search"
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Enter address, BIN, or BBL"
                  className="w-full border border-gray-400 bg-white px-4 py-3 text-black outline-none focus:border-[#0068A8]"
                />
              </div>

              <div>
                <label
                  htmlFor="borough-filter"
                  className="mb-2 block text-sm font-bold text-black"
                >
                  Borough
                </label>

                <select
                  id="borough-filter"
                  value={borough}
                  onChange={(e) => setBorough(e.target.value)}
                  className="w-full border border-gray-400 bg-white px-4 py-3 text-black outline-none focus:border-[#0068A8]"
                >
                  <option>All</option>
                  <option>Manhattan</option>
                  <option>Brooklyn</option>
                  <option>Queens</option>
                  <option>Bronx</option>
                  <option>Staten Island</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="status-filter"
                  className="mb-2 block text-sm font-bold text-black"
                >
                  Compliance Status
                </label>

                <select
                  id="status-filter"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full border border-gray-400 bg-white px-4 py-3 text-black outline-none focus:border-[#0068A8]"
                >
                  <option>All</option>
                  <option>Compliant</option>
                  <option>At Risk</option>
                  <option>Needs Review</option>
                </select>
              </div>
            </div>
          </div>

          {/* Table Header */}
          <div className="mt-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-[#0068A8]">
                Results
              </p>

              <h2 className="mt-1 text-2xl font-bold text-black">
                Covered Buildings
              </h2>
            </div>

            <p className="text-sm text-gray-600">
              {filteredBuildings.length} building
              {filteredBuildings.length !== 1 ? 's' : ''} shown
            </p>
          </div>

          {/* Building Table */}
          <div className="mt-5 overflow-x-auto border border-gray-300">
            <table className="min-w-full border-collapse">
              <thead className="bg-[#006B3C] text-left text-white">
                <tr>
                  <th className="px-5 py-4 text-sm font-bold">Address</th>
                  <th className="px-5 py-4 text-sm font-bold">Borough</th>
                  <th className="px-5 py-4 text-sm font-bold">BIN</th>
                  <th className="px-5 py-4 text-sm font-bold">BBL</th>
                  <th className="px-5 py-4 text-sm font-bold">
                    Emissions
                  </th>
                  <th className="px-5 py-4 text-sm font-bold">
                    Compliance
                  </th>
                  <th className="px-5 py-4 text-sm font-bold"></th>
                </tr>
              </thead>

              <tbody>
                {filteredBuildings.map((building) => (
                  <tr
                    key={building.id}
                    className="border-t border-gray-200 hover:bg-[#F7F8F6]"
                  >
                    <td className="px-5 py-5 font-semibold text-black">
                      {building.address}
                    </td>

                    <td className="px-5 py-5 text-sm text-gray-700">
                      {building.borough}
                    </td>

                    <td className="px-5 py-5 text-sm text-gray-700">
                      {building.bin}
                    </td>

                    <td className="px-5 py-5 text-sm text-gray-700">
                      {building.bbl}
                    </td>

                    <td className="px-5 py-5 text-sm text-gray-700">
                      {building.emissions} tCO₂e
                    </td>

                    <td className="px-5 py-5">
                      <span
                        className={`inline-block px-3 py-1 text-xs font-bold ${getStatusStyle(
                          building.status,
                        )}`}
                      >
                        {building.status}
                      </span>
                    </td>

                    <td className="px-5 py-5 text-right">
                      <Link
                        to={`/buildings/${building.id}`}
                        className="text-sm font-bold text-[#0068A8] hover:underline"
                      >
                        View Building →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredBuildings.length === 0 && (
              <div className="px-6 py-12 text-center">
                <p className="font-bold text-black">No buildings found</p>

                <p className="mt-2 text-sm text-gray-600">
                  Try changing your search or filter options.
                </p>
              </div>
            )}
          </div>

          <p className="mt-4 text-xs text-gray-500">
            Prototype data shown for frontend development. Building records will
            be replaced with project database data during backend integration.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Buildings