function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="bg-[#006B3C] text-white">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide">
                NYC Building Emissions
              </p>

              <h1 className="text-xl font-bold">
                Local Law 97 Compliance Dashboard
              </h1>
            </div>

            <nav className="flex items-center gap-6 text-sm font-semibold">
              <a href="#" className="hover:text-blue-200">
                Home
              </a>

              <a href="#" className="hover:text-blue-200">
                Buildings
              </a>

              <a href="#" className="hover:text-blue-200">
                Compliance Map
              </a>

              <a href="#" className="hover:text-blue-200">
                About LL97
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
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
                Track building emissions, understand current and future
                compliance, and explore pathways toward lower emissions across
                New York City.
              </p>

              <div className="mt-6 flex flex-wrap gap-5 text-sm font-semibold">
                <a href="#" className="text-[#0068A8] hover:underline">
                  Explore Compliance Map →
                </a>

                <a href="#" className="text-[#0068A8] hover:underline">
                  Learn about Local Law 97 →
                </a>
              </div>
            </div>

            {/* Search */}
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

        {/* Statistics */}
        <section className="bg-[#006B3C] text-white">
          <div className="mx-auto grid max-w-7xl grid-cols-1 px-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="border-b border-white/30 py-5 sm:border-r sm:px-6 lg:border-b-0">
              <p className="text-4xl font-bold">~75%</p>

              <p className="mt-2 text-sm leading-6">
                of NYC emissions come from powering, heating, and cooling
                buildings.
              </p>
            </div>

            <div className="border-b border-white/30 py-5 sm:px-6 lg:border-b-0 lg:border-r">
              <p className="text-4xl font-bold">~30%</p>

              <p className="mt-2 text-sm leading-6">
                of citywide emissions come from large existing buildings
                affected by Local Law 97.
              </p>
            </div>

            <div className="border-b border-white/30 py-5 sm:border-r sm:px-6 sm:border-b-0">
              <p className="text-4xl font-bold">~50,000</p>

              <p className="mt-2 text-sm leading-6">
                buildings are affected by Local Law 97 across New York City.
              </p>
            </div>

            <div className="py-5 sm:px-6">
              <p className="text-4xl font-bold">80% by 2050</p>

              <p className="mt-2 text-sm leading-6">
                NYC&apos;s long-term goal for reducing citywide greenhouse gas
                emissions.
              </p>
            </div>
          </div>
        </section>

        {/* Dashboard Capabilities */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-wider text-[#0068A8]">
                Dashboard Capabilities
              </p>

              <h2 className="mt-2 text-3xl font-bold text-black">
                Understand your building&apos;s path to compliance
              </h2>

              <p className="mt-4 text-base leading-7 text-gray-700">
                Use building-level emissions data, compliance analysis, and
                retrofit planning tools to understand current performance and
                prepare for future Local Law 97 limits.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {/* Track Emissions */}
              <div className="border border-gray-300 bg-white p-6">
                <div className="mb-4 h-1 w-12 bg-[#0068A8]"></div>

                <h3 className="text-xl font-bold text-[#0068A8]">
                  Track Emissions
                </h3>

                <p className="mt-3 leading-7 text-gray-700">
                  Review historical greenhouse gas emissions and energy
                  performance to understand how a building has changed over
                  time.
                </p>

                <a
                  href="#"
                  className="mt-5 inline-block text-sm font-bold text-[#0068A8] hover:underline"
                >
                  View building data →
                </a>
              </div>

              {/* Monitor Compliance */}
              <div className="border border-gray-300 bg-white p-6">
                <div className="mb-4 h-1 w-12 bg-[#0068A8]"></div>

                <h3 className="text-xl font-bold text-[#0068A8]">
                  Monitor Compliance
                </h3>

                <p className="mt-3 leading-7 text-gray-700">
                  Compare building emissions against Local Law 97 limits and
                  identify buildings that may face future compliance risk.
                </p>

                <a
                  href="#"
                  className="mt-5 inline-block text-sm font-bold text-[#0068A8] hover:underline"
                >
                  Check compliance →
                </a>
              </div>

              {/* Plan Retrofits */}
              <div className="border border-gray-300 bg-white p-6">
                <div className="mb-4 h-1 w-12 bg-[#0068A8]"></div>

                <h3 className="text-xl font-bold text-[#0068A8]">
                  Plan Retrofits
                </h3>

                <p className="mt-3 leading-7 text-gray-700">
                  Explore cost-efficient retrofit and upgrade strategies
                  designed to reduce emissions and help buildings meet future
                  compliance targets.
                </p>

                <a
                  href="#"
                  className="mt-5 inline-block text-sm font-bold text-[#0068A8] hover:underline"
                >
                  Explore recommendations →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Local Law 97 Overview */}
        <section className="bg-[#F4F5F4]">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              {/* Left */}
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-[#0068A8]">
                  Local Law 97
                </p>

                <h2 className="mt-2 max-w-2xl text-3xl font-bold text-black">
                  Why building emissions matter in New York City
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-7 text-gray-700">
                  Local Law 97 was adopted in 2019 as part of New York City&apos;s
                  Climate Mobilization Act. The law establishes greenhouse gas
                  emissions limits for many large buildings and requires owners
                  to reduce emissions as the limits become more stringent over
                  time.
                </p>

                <p className="mt-4 max-w-2xl text-base leading-7 text-gray-700">
                  The first compliance period began in 2024, with stronger
                  emissions limits beginning in 2030. The goal is to encourage
                  building owners to improve energy efficiency, modernize
                  building systems, and reduce greenhouse gas emissions.
                </p>

                <a
                  href="#"
                  className="mt-6 inline-block text-sm font-bold text-[#0068A8] hover:underline"
                >
                  Learn more about Local Law 97 →
                </a>
              </div>

              {/* Timeline */}
              <div className="border-l-4 border-[#006B3C] bg-white p-8">
                <p className="text-sm font-bold uppercase tracking-wide text-[#0068A8]">
                  Compliance Timeline
                </p>

                <div className="mt-7 space-y-7">
                  <div className="grid grid-cols-[90px_1fr] gap-5">
                    <p className="text-2xl font-bold text-[#006B3C]">
                      2019
                    </p>

                    <div>
                      <h3 className="font-bold text-black">
                        Local Law 97 enacted
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-gray-600">
                        New York City establishes building emissions
                        requirements as part of the Climate Mobilization Act.
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-7">
                    <div className="grid grid-cols-[90px_1fr] gap-5">
                      <p className="text-2xl font-bold text-[#006B3C]">
                        2024
                      </p>

                      <div>
                        <h3 className="font-bold text-black">
                          First compliance period
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-gray-600">
                          Initial greenhouse gas emissions limits begin for
                          covered buildings.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-7">
                    <div className="grid grid-cols-[90px_1fr] gap-5">
                      <p className="text-2xl font-bold text-[#006B3C]">
                        2030
                      </p>

                      <div>
                        <h3 className="font-bold text-black">
                          Stricter limits begin
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-gray-600">
                          The next compliance period introduces substantially
                          tighter emissions limits for covered buildings.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App