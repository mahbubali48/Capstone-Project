function CapabilitiesSection() {
  return (
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
            Use building-level emissions data, compliance analysis, and retrofit
            planning tools to understand current performance and prepare for
            future Local Law 97 limits.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="border border-gray-300 bg-white p-6">
            <div className="mb-4 h-1 w-12 bg-[#0068A8]"></div>

            <h3 className="text-xl font-bold text-[#0068A8]">
              Track Emissions
            </h3>

            <p className="mt-3 leading-7 text-gray-700">
              Review historical greenhouse gas emissions and energy performance
              to understand how a building has changed over time.
            </p>

            <a
              href="/buildings"
              className="mt-5 inline-block text-sm font-bold text-[#0068A8] hover:underline"
            >
              View building data →
            </a>
          </div>

          <div className="border border-gray-300 bg-white p-6">
            <div className="mb-4 h-1 w-12 bg-[#0068A8]"></div>

            <h3 className="text-xl font-bold text-[#0068A8]">
              Monitor Compliance
            </h3>

            <p className="mt-3 leading-7 text-gray-700">
              Compare building emissions against Local Law 97 limits and identify
              buildings that may face future compliance risk.
            </p>

            <a
              href="/buildings"
              className="mt-5 inline-block text-sm font-bold text-[#0068A8] hover:underline"
            >
              Check compliance →
            </a>
          </div>

          <div className="border border-gray-300 bg-white p-6">
            <div className="mb-4 h-1 w-12 bg-[#0068A8]"></div>

            <h3 className="text-xl font-bold text-[#0068A8]">
              Plan Retrofits
            </h3>

            <p className="mt-3 leading-7 text-gray-700">
              Explore cost-efficient retrofit and upgrade strategies designed to
              reduce emissions and help buildings meet future compliance targets.
            </p>

            <a
              href="/buildings"
              className="mt-5 inline-block text-sm font-bold text-[#0068A8] hover:underline"
            >
              Explore recommendations →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CapabilitiesSection