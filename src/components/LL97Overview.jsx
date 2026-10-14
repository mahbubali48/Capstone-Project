function LL97Overview() {
  return (
    <section className="bg-[#F4F5F4]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
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
              emissions limits for many large buildings and requires owners to
              reduce emissions as the limits become more stringent over time.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-7 text-gray-700">
              The first compliance period began in 2024, with stronger emissions
              limits beginning in 2030. The goal is to encourage building owners
              to improve energy efficiency, modernize building systems, and
              reduce greenhouse gas emissions.
            </p>

            <a
              href="/about-ll97"
              className="mt-6 inline-block text-sm font-bold text-[#0068A8] hover:underline"
            >
              Learn more about Local Law 97 →
            </a>
          </div>

          <div className="border-l-4 border-[#006B3C] bg-white p-8">
            <p className="text-sm font-bold uppercase tracking-wide text-[#0068A8]">
              Compliance Timeline
            </p>

            <div className="mt-7 space-y-7">
              <div className="grid grid-cols-[90px_1fr] gap-5">
                <p className="text-2xl font-bold text-[#006B3C]">2019</p>

                <div>
                  <h3 className="font-bold text-black">Local Law 97 enacted</h3>

                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    New York City establishes building emissions requirements as
                    part of the Climate Mobilization Act.
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-7">
                <div className="grid grid-cols-[90px_1fr] gap-5">
                  <p className="text-2xl font-bold text-[#006B3C]">2024</p>

                  <div>
                    <h3 className="font-bold text-black">
                      First compliance period
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Initial greenhouse gas emissions limits begin for covered
                      buildings.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-7">
                <div className="grid grid-cols-[90px_1fr] gap-5">
                  <p className="text-2xl font-bold text-[#006B3C]">2030</p>

                  <div>
                    <h3 className="font-bold text-black">
                      Stricter limits begin
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      The next compliance period introduces substantially tighter
                      emissions limits for covered buildings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LL97Overview