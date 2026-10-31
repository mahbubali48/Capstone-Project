import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="w-full overflow-hidden bg-[#006B3C] text-white">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wide sm:text-sm">
              NYC Building Emissions
            </p>

            <h1 className="mt-1 text-lg font-bold leading-snug sm:text-xl">
              Local Law 97 Compliance Dashboard
            </h1>
          </div>

          <nav className="flex w-full items-center justify-between gap-3 text-xs font-semibold sm:w-auto sm:justify-start sm:gap-6 sm:text-sm">
            <Link
              to="/"
              className="whitespace-nowrap hover:text-blue-200"
            >
              Home
            </Link>

            <Link
              to="/buildings"
              className="whitespace-nowrap hover:text-blue-200"
            >
              Buildings
            </Link>

            <Link
              to="/map"
              className="whitespace-nowrap hover:text-blue-200"
            >
              Compliance Map
            </Link>

            <Link
              to="/about-ll97"
              className="whitespace-nowrap hover:text-blue-200"
            >
              About LL97
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar