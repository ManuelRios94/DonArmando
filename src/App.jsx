import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Cabins from './components/Cabins'
import Amenities from './components/Amenities'
import Gallery from './components/Gallery'
import Location from './components/Location'
import Testimonials from './components/Testimonials'
import ContactCTA from './components/ContactCTA'
import Footer from './components/Footer'
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton'

function App() {
  return (
    <div className="min-h-screen bg-sand-50">
      <Header />
      <main>
        <Hero />
        <About />
        <Cabins />
        <Amenities />
        <Gallery />
        <Location />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  )
}

export default App
