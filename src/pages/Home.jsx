import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import StatsSection from '../components/StatsSection'
import CapabilitiesSection from '../components/CapabilitiesSection'
import LL97Overview from '../components/LL97Overview'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      <main>
        <Hero />
        <StatsSection />
        <CapabilitiesSection />
        <LL97Overview />
      </main>

      <Footer />
    </div>
  )
}

export default Home