import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-[#004F2D] text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide">
              NYC Building Emissions
            </p>

            <h2 className="mt-1 text-xl font-bold">
              Local Law 97 Compliance Dashboard
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-white/80">
              Building emissions analysis and Local Law 97 compliance tools for
              understanding current performance and future compliance.
            </p>
          </div>

          <div className="md:text-right">
            <div className="flex flex-wrap gap-5 text-sm font-semibold md:justify-end">
              <Link to="/" className="hover:underline">
                Home
              </Link>

              <Link to="/buildings" className="hover:underline">
                Buildings
              </Link>

              <Link to="/map" className="hover:underline">
                Compliance Map
              </Link>

              <Link to="/about-ll97" className="hover:underline">
                About LL97
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/20 pt-5 text-xs text-white/70">
          Academic prototype. Not an official City of New York website.
        </div>
      </div>
    </footer>
  )
}

export default Footer