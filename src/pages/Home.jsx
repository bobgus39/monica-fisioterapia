import { useEffect } from 'react'
import NavbarComponent from '../components/Navbar'
import Hero from '../components/Hero'
import SobreMonica from '../components/SobreMonica'
import Tratamientos from '../components/Tratamientos'
import Proceso from '../components/Proceso'
import PorQueElegirla from '../components/PorQueElegirla'
import Testimonios from '../components/Testimonios'
import Galeria from '../components/Galeria'
import Formulario from '../components/Formulario'
import Contacto from '../components/Contacto'
import Footer from '../components/Footer'
import { useAnimateOnScroll } from '../hooks/useIntersectionObserver'

export default function Home() {
  useAnimateOnScroll()

  return (
    <div className="dark min-h-screen">
      <NavbarComponent />
      <main>
        <Hero />
        <SobreMonica />
        <Tratamientos />
        <Proceso />
        <PorQueElegirla />
        <Testimonios />
        <Galeria />
        <Formulario />
        <Contacto />
      </main>
      <Footer />
    </div>
  )
}
