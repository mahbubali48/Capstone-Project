import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Buildings from './pages/Buildings'
import ComplianceMap from './pages/ComplianceMap'
import AboutLL97 from './pages/AboutLL97'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/buildings" element={<Buildings />} />
      <Route path="/map" element={<ComplianceMap />} />
      <Route path="/about-ll97" element={<AboutLL97 />} />
    </Routes>
  )
}

export default App