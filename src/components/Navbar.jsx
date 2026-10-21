import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="bg-[#006B3C] text-white">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide sm:text-sm">
              NYC Building Emissions
            </p>

            <h1 className="text-lg font-bold sm:text-xl">
              Local Law 97 Compliance Dashboard
            </h1>
          </div>

          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold">
            <Link to="/" className="hover:text-blue-200">
              Home
            </Link>

            <Link to="/buildings" className="hover:text-blue-200">
              Buildings
            </Link>

            <Link to="/map" className="hover:text-blue-200">
              Compliance Map
            </Link>

            <Link to="/about-ll97" className="hover:text-blue-200">
              About LL97
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar