import Hero from './components/Hero'
import SignatureDrinks from './components/SignatureDrinks'
import About from './components/About'
import MenuPreview from './components/MenuPreview'
import Testimonials from './components/Testimonials'
import Location from './components/Location'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen" style={{ background: '#F5EDE2' }}>
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
