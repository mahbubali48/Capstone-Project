import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { getBuildings } from '../services/buildingService'

function Buildings() {
  const [buildings, setBuildings] = useState([])
  const [search, setSearch] = useState('')
  const [borough, setBorough] = useState('All')
  const [status, setStatus] = useState('All')

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadBuildings() {
      try {
        setLoading(true)
        setError('')

        const data = await getBuildings()
        setBuildings(data)
      } catch {
        setError('Unable to load building data.')
      } finally {
        setLoading(false)
      }
    }

    loadBuildings()
  }, [])

  const filteredBuildings = useMemo(() => {
    return buildings.filter((building) => {
      const normalizedSearch = search.trim().toLowerCase()

      const matchesSearch =
        building.address.toLowerCase().includes(normalizedSearch) ||
        building.bin.includes(search.trim()) ||
        building.bbl.includes(search.trim())

      const matchesBorough =
        borough === 'All' || building.borough === borough

      const matchesStatus =
        status === 'All' || building.status === status

      return matchesSearch && matchesBorough && matchesStatus
    })
  }, [buildings, search, borough, status])

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
        <section className="border-b border-gray-200 bg-[#F7F8F6]">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12">
            <p className="text-sm font-bold uppercase tracking-wider text-[#0068A8]">
              Building Directory
            </p>

            <h1 className="mt-2 text-3xl font-bold text-black sm:text-4xl">
              Explore Covered Buildings
            </h1>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-700 sm:text-base">
              Search and filter buildings affected by Local Law 97 to review
              building identifiers, emissions information, and current
              compliance status.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10">
          <div className="border border-gray-300 bg-white p-4 sm:p-6">
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

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-[#0068A8]">
                Results
              </p>

              <h2 className="mt-1 text-2xl font-bold text-black">
                Covered Buildings
              </h2>
            </div>

            {!loading && !error && (
              <p className="text-sm text-gray-600">
                {filteredBuildings.length} building
                {filteredBuildings.length !== 1 ? 's' : ''} shown
              </p>
            )}
          </div>

          {loading && (
            <div className="mt-5 border border-gray-300 bg-[#F7F8F6] px-6 py-12 text-center">
              <p className="font-bold text-black">Loading buildings...</p>
              <p className="mt-2 text-sm text-gray-600">
                Retrieving building information.
              </p>
            </div>
          )}

          {!loading && error && (
            <div className="mt-5 border-l-4 border-red-700 bg-red-50 px-6 py-6">
              <p className="font-bold text-red-800">
                Building data could not be loaded
              </p>

              <p className="mt-2 text-sm text-red-700">{error}</p>
            </div>
          )}

          {!loading && !error && (
            <>
              <div className="mt-5 space-y-4 md:hidden">
                {filteredBuildings.map((building) => (
                  <article
                    key={building.id}
                    className="border border-gray-300 bg-white p-5"
                  >
                    <div className="flex flex-col gap-3">
                      <div>
                        <p className="text-lg font-bold text-black">
                          {building.address}
                        </p>

                        <p className="mt-1 text-sm text-gray-600">
                          {building.borough}
                        </p>
                      </div>

                      <span
                        className={`inline-block w-fit px-3 py-1 text-xs font-bold ${getStatusStyle(
                          building.status,
                        )}`}
                      >
                        {building.status}
                      </span>
                    </div>

                    <dl className="mt-5 space-y-3 text-sm">
                      <div className="flex items-start justify-between gap-4 border-b border-gray-200 pb-3">
                        <dt className="text-gray-600">BIN</dt>
                        <dd className="text-right font-semibold">
                          {building.bin}
                        </dd>
                      </div>

                      <div className="flex items-start justify-between gap-4 border-b border-gray-200 pb-3">
                        <dt className="text-gray-600">BBL</dt>
                        <dd className="text-right font-semibold">
                          {building.bbl}
                        </dd>
                      </div>

                      <div className="flex items-start justify-between gap-4">
                        <dt className="text-gray-600">Emissions</dt>
                        <dd className="text-right font-semibold">
                          {building.emissions.toLocaleString()} tCO₂e
                        </dd>
                      </div>
                    </dl>

                    <Link
                      to={`/buildings/${building.id}`}
                      className="mt-5 block border border-[#0068A8] px-4 py-3 text-center text-sm font-bold text-[#0068A8] transition hover:bg-[#0068A8] hover:text-white"
                    >
                      View Building →
                    </Link>
                  </article>
                ))}
              </div>

              <div className="mt-5 hidden overflow-x-auto border border-gray-300 md:block">
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
                        <td className="whitespace-nowrap px-5 py-5 font-semibold text-black">
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

                        <td className="whitespace-nowrap px-5 py-5 text-sm text-gray-700">
                          {building.emissions.toLocaleString()} tCO₂e
                        </td>

                        <td className="px-5 py-5">
                          <span
                            className={`inline-block whitespace-nowrap px-3 py-1 text-xs font-bold ${getStatusStyle(
                              building.status,
                            )}`}
                          >
                            {building.status}
                          </span>
                        </td>

                        <td className="whitespace-nowrap px-5 py-5 text-right">
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
              </div>

              {filteredBuildings.length === 0 && (
                <div className="mt-5 border border-gray-300 px-6 py-12 text-center">
                  <p className="font-bold text-black">No buildings found</p>

                  <p className="mt-2 text-sm text-gray-600">
                    Try changing your search or filter options.
                  </p>
                </div>
              )}
            </>
          )}

          <p className="mt-4 text-xs leading-5 text-gray-500">
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