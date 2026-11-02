import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { getBuilding } from '../services/buildingService'

function BuildingDetail() {
  const { id } = useParams()

  const [building, setBuilding] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadBuilding() {
      try {
        setLoading(true)
        setError('')

        const data = await getBuilding(id)

        if (!data) {
          setError('The requested building could not be found.')
          return
        }

        setBuilding(data)
      } catch {
        setError('Unable to load building information.')
      } finally {
        setLoading(false)
      }
    }

    loadBuilding()
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen bg-white text-black">
        <Navbar />

        <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <p className="text-sm font-bold uppercase tracking-wider text-[#0068A8]">
            Building Overview
          </p>

          <h1 className="mt-2 text-3xl font-bold">
            Loading building...
          </h1>

          <p className="mt-3 text-gray-600">
            Retrieving building information.
          </p>
        </main>

        <Footer />
      </div>
    )
  }

  if (error || !building) {
    return (
      <div className="min-h-screen bg-white text-black">
        <Navbar />

        <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <p className="text-sm font-bold uppercase tracking-wider text-[#0068A8]">
            Building Not Found
          </p>

          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
            We could not load this building.
          </h1>

          <p className="mt-3 text-gray-600">{error}</p>

          <Link
            to="/buildings"
            className="mt-6 inline-block font-bold text-[#0068A8] hover:underline"
          >
            ← Back to Buildings
          </Link>
        </main>

        <Footer />
      </div>
    )
  }

  const currentDifference = building.emissions - building.limit
  const isOverCurrentLimit = currentDifference > 0

  const difference2030 =
    building.emissions - building.projected2030Limit

  const isOver2030Limit = difference2030 > 0

  const requiredCurrentReduction = isOverCurrentLimit
    ? currentDifference
    : 0

  const required2030Reduction = isOver2030Limit
    ? difference2030
    : 0

  const reductionPercent2030 =
    required2030Reduction > 0
      ? (
          (required2030Reduction / building.emissions) *
          100
        ).toFixed(1)
      : 0

  const statusStyle =
    building.status === 'Compliant'
      ? 'bg-green-100 text-green-800'
      : building.status === 'At Risk'
        ? 'bg-red-100 text-red-800'
        : 'bg-yellow-100 text-yellow-800'

  const projectedStatusStyle =
    building.projected2030Status === 'Compliant'
      ? 'bg-green-100 text-green-800'
      : 'bg-red-100 text-red-800'

  const maxHistoricalEmissions = Math.max(
    ...building.historicalEmissions.map((item) => item.emissions),
  )

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      <main>
        <section className="border-b border-gray-200 bg-[#F7F8F6]">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10">
            <Link
              to="/buildings"
              className="text-sm font-bold text-[#0068A8] hover:underline"
            >
              ← Back to Buildings
            </Link>

            <p className="mt-6 text-sm font-bold uppercase tracking-wider text-[#0068A8]">
              Building Overview
            </p>

            <div className="mt-2 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h1 className="text-3xl font-bold text-black sm:text-4xl">
                  {building.address}
                </h1>

                <p className="mt-2 break-words text-sm leading-6 text-gray-700 sm:text-base">
                  {building.borough} · BIN {building.bin} · BBL {building.bbl}
                </p>
              </div>

              <span
                className={`inline-block w-fit px-4 py-2 text-sm font-bold ${statusStyle}`}
              >
                {building.status}
              </span>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            <div className="border border-gray-300 p-5">
              <p className="text-sm font-bold uppercase tracking-wide text-[#0068A8]">
                Building Type
              </p>

              <p className="mt-2 text-xl font-bold sm:text-2xl">
                {building.buildingType}
              </p>
            </div>

            <div className="border border-gray-300 p-5">
              <p className="text-sm font-bold uppercase tracking-wide text-[#0068A8]">
                Gross Floor Area
              </p>

              <p className="mt-2 text-xl font-bold sm:text-2xl">
                {building.squareFeet.toLocaleString()} sq ft
              </p>
            </div>

            <div className="border border-gray-300 p-5">
              <p className="text-sm font-bold uppercase tracking-wide text-[#0068A8]">
                Current Emissions
              </p>

              <p className="mt-2 text-xl font-bold sm:text-2xl">
                {building.emissions.toLocaleString()} tCO₂e
              </p>
            </div>

            <div className="border border-gray-300 p-5">
              <p className="text-sm font-bold uppercase tracking-wide text-[#0068A8]">
                Projected Penalty
              </p>

              <p className="mt-2 text-xl font-bold sm:text-2xl">
                {building.projectedPenalty}
              </p>
            </div>
          </div>

          <div className="mt-8 border-l-4 border-[#006B3C] bg-[#F7F8F6] p-5 sm:mt-10 sm:p-6">
            <p className="text-sm font-bold uppercase tracking-wide text-[#0068A8]">
              Compliance Gap
            </p>

            <h2 className="mt-2 text-xl font-bold sm:text-2xl">
              Reduction Needed to Meet Emissions Limits
            </h2>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div>
                <p className="text-sm font-semibold text-gray-600">
                  Current limit reduction
                </p>

                <p className="mt-1 text-2xl font-bold sm:text-3xl">
                  {requiredCurrentReduction.toLocaleString()} tCO₂e
                </p>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Required to meet the current emissions limit.
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-600">
                  2030 reduction needed
                </p>

                <p className="mt-1 text-2xl font-bold sm:text-3xl">
                  {required2030Reduction.toLocaleString()} tCO₂e
                </p>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Additional reduction required to meet the 2030 limit.
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-600">
                  Reduction from current emissions
                </p>

                <p className="mt-1 text-2xl font-bold text-[#006B3C] sm:text-3xl">
                  {reductionPercent2030}%
                </p>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Approximate reduction needed to reach the 2030 threshold.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:mt-10 lg:grid-cols-2 lg:gap-8">
            <div className="border border-gray-300 p-5 sm:p-6">
              <p className="text-sm font-bold uppercase tracking-wide text-[#0068A8]">
                Compliance
              </p>

              <h2 className="mt-2 text-xl font-bold sm:text-2xl">
                Current LL97 Performance
              </h2>

              <div className="mt-6 space-y-5">
                <div className="flex flex-col gap-1 border-b border-gray-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-gray-600">
                    Current emissions
                  </span>

                  <span className="font-bold">
                    {building.emissions.toLocaleString()} tCO₂e
                  </span>
                </div>

                <div className="flex flex-col gap-1 border-b border-gray-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-gray-600">
                    Applicable limit
                  </span>

                  <span className="font-bold">
                    {building.limit.toLocaleString()} tCO₂e
                  </span>
                </div>

                <div className="flex flex-col gap-1 border-b border-gray-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-gray-600">
                    Amount {isOverCurrentLimit ? 'over' : 'under'} limit
                  </span>

                  <span
                    className={`font-bold ${
                      isOverCurrentLimit
                        ? 'text-red-700'
                        : 'text-green-700'
                    }`}
                  >
                    {Math.abs(currentDifference).toLocaleString()} tCO₂e
                  </span>
                </div>

                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-gray-600">
                    Compliance status
                  </span>

                  <span className="font-bold">
                    {building.status}
                  </span>
                </div>
              </div>
            </div>

            <div className="border border-gray-300 p-5 sm:p-6">
              <p className="text-sm font-bold uppercase tracking-wide text-[#0068A8]">
                2030 Outlook
              </p>

              <h2 className="mt-2 text-xl font-bold sm:text-2xl">
                Projected Compliance
              </h2>

              <div className="mt-6 space-y-5">
                <div className="flex flex-col gap-1 border-b border-gray-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-gray-600">
                    Projected 2030 limit
                  </span>

                  <span className="font-bold">
                    {building.projected2030Limit.toLocaleString()} tCO₂e
                  </span>
                </div>

                <div className="flex flex-col gap-1 border-b border-gray-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-gray-600">
                    Amount {isOver2030Limit ? 'over' : 'under'} 2030 limit
                  </span>

                  <span
                    className={`font-bold ${
                      isOver2030Limit
                        ? 'text-red-700'
                        : 'text-green-700'
                    }`}
                  >
                    {Math.abs(difference2030).toLocaleString()} tCO₂e
                  </span>
                </div>

                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-gray-600">
                    Projected status
                  </span>

                  <span
                    className={`w-fit px-3 py-1 text-xs font-bold ${projectedStatusStyle}`}
                  >
                    {building.projected2030Status}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border border-gray-300 p-5 sm:mt-10 sm:p-6">
            <p className="text-sm font-bold uppercase tracking-wide text-[#0068A8]">
              Emissions Trend
            </p>

            <h2 className="mt-2 text-xl font-bold sm:text-2xl">
              Historical Emissions
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Historical emissions data is currently shown using prototype
              values until benchmarking data is connected.
            </p>

            <div className="mt-6 w-full border border-dashed border-gray-400 bg-[#F7F8F6] p-3 sm:p-6">
              <div className="flex h-52 w-full items-end border-b border-l border-gray-400 px-2 pb-4 sm:h-56 sm:px-4">
                <div className="flex h-full w-full items-end justify-between gap-2">
                  {building.historicalEmissions.map((record) => {
                    const height =
                      (record.emissions / maxHistoricalEmissions) * 85

                    return (
                      <div
                        key={record.year}
                        className="flex h-full min-w-0 flex-1 flex-col items-center justify-end"
                      >
                        <div
                          className="w-5 max-w-10 bg-gray-300 sm:w-10"
                          style={{ height: `${height}%` }}
                        />
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="mt-3 flex w-full justify-between px-1 text-[10px] text-gray-500 sm:px-4 sm:text-xs">
                {building.historicalEmissions.map((record) => (
                  <span
                    key={record.year}
                    className="flex-1 text-center"
                  >
                    {record.year}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-center text-xs leading-5 text-gray-500">
                Prototype visualization — not real emissions data
              </p>
            </div>
          </div>

          <div className="mt-8 border border-gray-300 p-5 sm:mt-10 sm:p-6">
            <p className="text-sm font-bold uppercase tracking-wide text-[#0068A8]">
              Retrofit Planning
            </p>

            <h2 className="mt-2 text-xl font-bold sm:text-2xl">
              Recommended Upgrades
            </h2>

            <p className="mt-3 max-w-3xl text-sm leading-6 text-gray-700 sm:text-base">
              Cost-efficient retrofit recommendations will be displayed here
              once the optimization engine and backend data are connected.
            </p>

            <div className="mt-6 grid gap-5 md:grid-cols-3">
              <div className="border border-gray-200 p-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <h3 className="font-bold text-[#0068A8]">
                    HVAC Improvements
                  </h3>

                  <span className="w-fit bg-red-100 px-2 py-1 text-xs font-bold text-red-800">
                    High Priority
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Placeholder for heating, cooling, and controls upgrades.
                </p>

                <div className="mt-5 border-t border-gray-200 pt-4 text-sm">
                  <p>
                    <span className="font-bold">Est. reduction:</span> TBD
                  </p>

                  <p className="mt-2">
                    <span className="font-bold">Est. cost:</span> TBD
                  </p>
                </div>
              </div>

              <div className="border border-gray-200 p-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <h3 className="font-bold text-[#0068A8]">
                    Building Envelope
                  </h3>

                  <span className="w-fit bg-yellow-100 px-2 py-1 text-xs font-bold text-yellow-800">
                    Medium Priority
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Placeholder for insulation, windows, and envelope upgrades.
                </p>

                <div className="mt-5 border-t border-gray-200 pt-4 text-sm">
                  <p>
                    <span className="font-bold">Est. reduction:</span> TBD
                  </p>

                  <p className="mt-2">
                    <span className="font-bold">Est. cost:</span> TBD
                  </p>
                </div>
              </div>

              <div className="border border-gray-200 p-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <h3 className="font-bold text-[#0068A8]">
                    Electrification
                  </h3>

                  <span className="w-fit bg-yellow-100 px-2 py-1 text-xs font-bold text-yellow-800">
                    Medium Priority
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Placeholder for equipment electrification and fuel-switching
                  recommendations.
                </p>

                <div className="mt-5 border-t border-gray-200 pt-4 text-sm">
                  <p>
                    <span className="font-bold">Est. reduction:</span> TBD
                  </p>

                  <p className="mt-2">
                    <span className="font-bold">Est. cost:</span> TBD
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-5 text-xs leading-5 text-gray-500">
            Prototype data shown for frontend development. Values and
            recommendations will be replaced with backend data during
            integration.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default BuildingDetail