import { Link } from 'react-router-dom'

function Navbar() {
  return (
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