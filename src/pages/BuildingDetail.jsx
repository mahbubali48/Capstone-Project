import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const mockBuildingData = {
  1: {
    address: '350 5th Ave',
    borough: 'Manhattan',
    bin: '1015862',
    bbl: '1008350041',
    buildingType: 'Office',
    squareFeet: '2,250,000',
    emissions: 8420,
    limit: 7500,
    projected2030Limit: 6100,
    status: 'At Risk',
    projected2030Status: 'At Risk',
    projectedPenalty: '$241,000',
  },
  2: {
    address: '30 Rockefeller Plaza',
    borough: 'Manhattan',
    bin: '1033423',
    bbl: '1012660001',
    buildingType: 'Office',
    squareFeet: '2,900,000',
    emissions: 5780,
    limit: 6200,
    projected2030Limit: 5200,
    status: 'Compliant',
    projected2030Status: 'At Risk',
    projectedPenalty: '$0',
  },
}

function BuildingDetail() {
  const { id } = useParams()

  const building = mockBuildingData[id] || mockBuildingData[1]

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
      : 'bg-red-100 text-red-800'

  const projectedStatusStyle =
    building.projected2030Status === 'Compliant'
      ? 'bg-green-100 text-green-800'
      : 'bg-red-100 text-red-800'

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      <main>
        {/* Header */}
        <section className="border-b border-gray-200 bg-[#F7F8F6]">
          <div className="mx-auto max-w-7xl px-6 py-10">
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
                <h1 className="text-4xl font-bold text-black">
                  {building.address}
                </h1>

                <p className="mt-2 text-gray-700">
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

        <section className="mx-auto max-w-7xl px-6 py-12">
          {/* Summary Cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="border border-gray-300 p-5">
              <p className="text-sm font-bold uppercase tracking-wide text-[#0068A8]">
                Building Type
              </p>

              <p className="mt-2 text-2xl font-bold">
                {building.buildingType}
              </p>
            </div>

            <div className="border border-gray-300 p-5">
              <p className="text-sm font-bold uppercase tracking-wide text-[#0068A8]">
                Gross Floor Area
              </p>

              <p className="mt-2 text-2xl font-bold">
                {building.squareFeet} sq ft
              </p>
            </div>

            <div className="border border-gray-300 p-5">
              <p className="text-sm font-bold uppercase tracking-wide text-[#0068A8]">
                Current Emissions
              </p>

              <p className="mt-2 text-2xl font-bold">
                {building.emissions.toLocaleString()} tCO₂e
              </p>
            </div>

            <div className="border border-gray-300 p-5">
              <p className="text-sm font-bold uppercase tracking-wide text-[#0068A8]">
                Projected Penalty
              </p>

              <p className="mt-2 text-2xl font-bold">
                {building.projectedPenalty}
              </p>
            </div>
          </div>

          {/* Compliance Gap */}
          <div className="mt-10 border-l-4 border-[#006B3C] bg-[#F7F8F6] p-6">
            <p className="text-sm font-bold uppercase tracking-wide text-[#0068A8]">
              Compliance Gap
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              Reduction Needed to Meet Emissions Limits
            </h2>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div>
                <p className="text-sm font-semibold text-gray-600">
                  Current limit reduction
                </p>

                <p className="mt-1 text-3xl font-bold text-black">
                  {requiredCurrentReduction.toLocaleString()} tCO₂e
                </p>

                <p className="mt-2 text-sm text-gray-600">
                  Required to meet the current emissions limit.
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-600">
                  2030 reduction needed
                </p>

                <p className="mt-1 text-3xl font-bold text-black">
                  {required2030Reduction.toLocaleString()} tCO₂e
                </p>

                <p className="mt-2 text-sm text-gray-600">
                  Additional reduction required to meet the 2030 limit.
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-600">
                  Reduction from current emissions
                </p>

                <p className="mt-1 text-3xl font-bold text-[#006B3C]">
                  {reductionPercent2030}%
                </p>

                <p className="mt-2 text-sm text-gray-600">
                  Approximate reduction needed to reach the 2030 threshold.
                </p>
              </div>
            </div>
          </div>

          {/* Compliance */}
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="border border-gray-300 p-6">
              <p className="text-sm font-bold uppercase tracking-wide text-[#0068A8]">
                Compliance
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                Current LL97 Performance
              </h2>

              <div className="mt-6 space-y-5">
                <div className="flex justify-between border-b border-gray-200 pb-4">
                  <span className="text-gray-600">
                    Current emissions
                  </span>

                  <span className="font-bold">
                    {building.emissions.toLocaleString()} tCO₂e
                  </span>
                </div>

                <div className="flex justify-between border-b border-gray-200 pb-4">
                  <span className="text-gray-600">
                    Applicable limit
                  </span>

                  <span className="font-bold">
                    {building.limit.toLocaleString()} tCO₂e
                  </span>
                </div>

                <div className="flex justify-between border-b border-gray-200 pb-4">
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

                <div className="flex justify-between">
                  <span className="text-gray-600">
                    Compliance status
                  </span>

                  <span className="font-bold">
                    {building.status}
                  </span>
                </div>
              </div>
            </div>

            {/* 2030 Outlook */}
            <div className="border border-gray-300 p-6">
              <p className="text-sm font-bold uppercase tracking-wide text-[#0068A8]">
                2030 Outlook
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                Projected Compliance
              </h2>

              <div className="mt-6 space-y-5">
                <div className="flex justify-between border-b border-gray-200 pb-4">
                  <span className="text-gray-600">
                    Projected 2030 limit
                  </span>

                  <span className="font-bold">
                    {building.projected2030Limit.toLocaleString()} tCO₂e
                  </span>
                </div>

                <div className="flex justify-between border-b border-gray-200 pb-4">
                  <span className="text-gray-600">
                    Amount over 2030 limit
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

                <div className="flex items-center justify-between">
                  <span className="text-gray-600">
                    Projected status
                  </span>

                  <span
                    className={`px-3 py-1 text-xs font-bold ${projectedStatusStyle}`}
                  >
                    {building.projected2030Status}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Emissions Trend */}
          <div className="mt-10 border border-gray-300 p-6">
            <p className="text-sm font-bold uppercase tracking-wide text-[#0068A8]">
              Emissions Trend
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              Historical Emissions
            </h2>

            <p className="mt-3 text-sm text-gray-600">
              Historical building emissions will be displayed here once yearly
              benchmarking data is connected.
            </p>

            <div className="mt-6 border border-dashed border-gray-400 bg-[#F7F8F6] p-6">
              <div className="flex h-56 items-end justify-between gap-4 border-b border-l border-gray-400 px-6 pb-5">
                <div className="flex h-full flex-1 items-end justify-around gap-3">
                  <div className="h-[45%] w-12 bg-gray-300"></div>
                  <div className="h-[60%] w-12 bg-gray-300"></div>
                  <div className="h-[52%] w-12 bg-gray-300"></div>
                  <div className="h-[70%] w-12 bg-gray-300"></div>
                  <div className="h-[64%] w-12 bg-gray-300"></div>
                </div>
              </div>

              <div className="mt-3 flex justify-around pl-6 text-xs text-gray-500">
                <span>2020</span>
                <span>2021</span>
                <span>2022</span>
                <span>2023</span>
                <span>2024</span>
              </div>

              <p className="mt-4 text-center text-xs text-gray-500">
                Placeholder visualization — not real emissions data
              </p>
            </div>
          </div>

          {/* Retrofit Recommendations */}
          <div className="mt-10 border border-gray-300 p-6">
            <p className="text-sm font-bold uppercase tracking-wide text-[#0068A8]">
              Retrofit Planning
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              Recommended Upgrades
            </h2>

            <p className="mt-3 max-w-3xl text-gray-700">
              Cost-efficient retrofit recommendations will be displayed here
              once the optimization engine and backend data are connected.
            </p>

            <div className="mt-6 grid gap-5 md:grid-cols-3">
              <div className="border border-gray-200 p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-bold text-[#0068A8]">
                    HVAC Improvements
                  </h3>

                  <span className="bg-red-100 px-2 py-1 text-xs font-bold text-red-800">
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
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-bold text-[#0068A8]">
                    Building Envelope
                  </h3>

                  <span className="bg-yellow-100 px-2 py-1 text-xs font-bold text-yellow-800">
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
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-bold text-[#0068A8]">
                    Electrification
                  </h3>

                  <span className="bg-yellow-100 px-2 py-1 text-xs font-bold text-yellow-800">
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

          <p className="mt-5 text-xs text-gray-500">
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