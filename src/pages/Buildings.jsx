import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Buildings() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm font-bold uppercase tracking-wider text-[#0068A8]">
          Buildings
        </p>

        <h1 className="mt-2 text-4xl font-bold">
          Building Compliance Data
        </h1>

        <p className="mt-4 text-gray-700">
          Building data and compliance information will be displayed here.
        </p>
      </main>

      <Footer />
    </div>
  )
}

export default Buildings