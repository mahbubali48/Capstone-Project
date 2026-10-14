import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function AboutLL97() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm font-bold uppercase tracking-wider text-[#0068A8]">
          About
        </p>

        <h1 className="mt-2 text-4xl font-bold">
          About Local Law 97
        </h1>

        <p className="mt-4 max-w-3xl text-gray-700">
          More information about Local Law 97 and the project will be displayed
          here.
        </p>
      </main>

      <Footer />
    </div>
  )
}

export default AboutLL97