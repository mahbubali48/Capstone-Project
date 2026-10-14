import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function ComplianceMap() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm font-bold uppercase tracking-wider text-[#0068A8]">
          Compliance Map
        </p>

        <h1 className="mt-2 text-4xl font-bold">
          NYC Building Compliance Map
        </h1>

        <p className="mt-4 text-gray-700">
          The interactive building compliance map will be added here.
        </p>
      </main>

      <Footer />
    </div>
  )
}

export default ComplianceMap