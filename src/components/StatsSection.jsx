function StatsSection() {
  return (
    <section className="bg-[#006B3C] text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 px-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="border-b border-white/30 py-5 sm:border-r sm:px-6 lg:border-b-0">
          <p className="text-4xl font-bold">~75%</p>
          <p className="mt-2 text-sm leading-6">
            of NYC emissions come from powering, heating, and cooling buildings.
          </p>
        </div>

        <div className="border-b border-white/30 py-5 sm:px-6 lg:border-b-0 lg:border-r">
          <p className="text-4xl font-bold">~30%</p>
          <p className="mt-2 text-sm leading-6">
            of citywide emissions come from large existing buildings affected by
            Local Law 97.
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
  )
}

export default StatsSection