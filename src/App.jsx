import Hero from './components/Hero'
import SignatureDrinks from './components/SignatureDrinks'
import About from './components/About'
import MenuPreview from './components/MenuPreview'
import Testimonials from './components/Testimonials'
import Location from './components/Location'
import Footer from './components/Footer'
import CursorSpotlight from './components/CursorSpotlight'
import ParallaxLayers from './components/ParallaxLayers'
import NoiseOverlay from './components/NoiseOverlay'

function App() {
  return (
    <div className="min-h-screen relative" style={{ background: 'linear-gradient(180deg, #F5EDE2 0%, #FAF8F2 40%, #F5EDE2 100%)' }}>
      {/* Ambient layers */}
      <ParallaxLayers />
      <CursorSpotlight />
      <NoiseOverlay />

      <Hero />
      <SignatureDrinks />
      <About />
      <MenuPreview />
      <Testimonials />
      <Location />
      <Footer />
    </div>
  )
}

export default App
