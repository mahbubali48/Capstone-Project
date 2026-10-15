import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const steps = [
  {
    title: 'NYC Open Data',
    text: 'Annual building energy benchmarking data (Local Law 84) is collected from NYC Open Data.',
  },
  {
    title: 'Clean and merge',
    text: 'Python scripts remove nulls and duplicates, reconcile fields that are named differently from year to year, and calculate emissions intensity per building.',
  },
  {
    title: 'Database',
    text: 'The cleaned data is stored in a relational SQL database linking buildings, energy use, emissions, and compliance.',
  },
  {
    title: 'Compliance tracking',
    text: 'Each building is compared against its Local Law 97 emissions limit. Buildings facing penalties are flagged, and progress toward the stricter 2030 limits is tracked.',
  },
  {
    title: 'Retrofit recommendations',
    text: 'An optimization engine finds the most cost-efficient upgrades to bring buildings into compliance. It works for any future 5-year period, not just 2030.',
  },
]

const team = [
  {
    name: 'Sumaiya Ahona',
    role: 'Database',
    text: 'Designs the relational database and the queries that feed the dashboard.',
  },
  {
    name: 'Shamseldin Shoaab',
    role: 'Data and optimization',
    text: 'Cleans the datasets, builds the database with Sumaiya, and researches retrofit cost-effectiveness for the optimizer.',
  },
  {
    name: 'Mahbub Ali',
    role: 'Frontend',
    text: 'Builds the dashboard pages and connects them to building data.',
  },
  {
    name: 'Santiago Cadme',
    role: 'Frontend',
    text: 'Builds the dashboard pages, charts, and the About page.',
  },
]

function AboutLL97() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      <main>
        {/* Intro */}
        <section className="mx-auto max-w-7xl px-6 py-14">
          <p className="text-sm font-bold uppercase tracking-wider text-[#0068A8]">
            About
          </p>

          <h2 className="mt-3 max-w-4xl text-5xl font-bold leading-tight text-black">
            About this project
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-700">
            The Local Law 97 Compliance Dashboard helps building owners and
            residents see how New York City&apos;s large buildings are doing
            against the city&apos;s emissions limits, and what it would take to
            meet them. It was built as a semester-long capstone project for
            CSCI 499.
          </p>
        </section>

        {/* Law, why it matters, dashboard, data */}
        <section className="bg-[#F4F5F4]">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 py-16 md:grid-cols-2">
            <div className="border-l-4 border-[#006B3C] bg-white p-8">
              <h3 className="text-xl font-bold text-[#0068A8]">
                What the law is
              </h3>

              <p className="mt-3 leading-7 text-gray-700">
                Local Law 97 was passed in 2019 as part of the Climate
                Mobilization Act. It sets greenhouse gas emissions limits for
                existing buildings larger than 25,000 square feet, about 50,000
                buildings citywide. Limits tighten over time, and owners who go
                over them face financial penalties.
              </p>
            </div>

            <div className="border-l-4 border-[#006B3C] bg-white p-8">
              <h3 className="text-xl font-bold text-[#0068A8]">
                Why it matters
              </h3>

              <p className="mt-3 leading-7 text-gray-700">
                Powering, heating, and cooling buildings produces about 75% of
                the city&apos;s emissions, and the buildings covered by this law
                alone account for about 30%. The city&apos;s goal of an 80%
                reduction in emissions by 2050 depends heavily on how well Local
                Law 97 works.
              </p>
            </div>

            <div className="border-l-4 border-[#006B3C] bg-white p-8">
              <h3 className="text-xl font-bold text-[#0068A8]">
                What the dashboard helps with
              </h3>

              <p className="mt-3 leading-7 text-gray-700">
                Many tools show parts of this picture, but we could not find one
                that combines it all. The dashboard shows each building&apos;s
                emissions trend, whether it meets its limit, its projected
                penalties, and the most cost-efficient retrofits to get it into
                compliance.
              </p>
            </div>

            <div className="border-l-4 border-[#006B3C] bg-white p-8">
              <h3 className="text-xl font-bold text-[#0068A8]">
                Where the data comes from
              </h3>

              <p className="mt-3 leading-7 text-gray-700">
                Our data comes from NYC Open Data, the City of New York&apos;s
                free public data portal. We use the annual energy and water
                benchmarking datasets, which include energy use, greenhouse gas
                emissions, building type, square footage, and building
                identifiers.
              </p>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-wider text-[#0068A8]">
                How it works
              </p>

              <h2 className="mt-2 text-3xl font-bold text-black">
                From open data to retrofit recommendations
              </h2>
            </div>

            <ol className="mt-10 grid gap-6 md:grid-cols-5">
              {steps.map((step, i) => (
                <li
                  key={step.title}
                  className="border border-gray-300 bg-white p-5"
                >
                  <p className="text-2xl font-bold text-[#006B3C]">{i + 1}</p>

                  <h3 className="mt-2 font-bold text-[#0068A8]">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-700">
                    {step.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Team */}
        <section className="bg-[#F4F5F4]">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <h2 className="text-3xl font-bold text-black">Our team</h2>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="border-t-4 border-[#006B3C] bg-white p-6"
                >
                  <h3 className="text-lg font-bold text-black">
                    {member.name}
                  </h3>

                  <p className="text-sm font-bold text-[#0068A8]">
                    {member.role}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-gray-700">
                    {member.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default AboutLL97