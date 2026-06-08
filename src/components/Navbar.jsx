import { useState, useEffect } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
} from '@heroui/react'
import { Button } from '@heroui/react'

const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Sobre Mónica', href: '#sobre-monica' },
  { label: 'Tratamientos', href: '#tratamientos' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
]

function HamburgerIcon({ open }) {
  return (
    <span className="flex flex-col justify-center items-center w-5 h-5 gap-[5px]">
      <span
        className={`block h-[2px] w-5 bg-white rounded-full transition-all duration-300 origin-center ${
          open ? 'rotate-45 translate-y-[7px]' : ''
        }`}
      />
      <span
        className={`block h-[2px] bg-white rounded-full transition-all duration-300 ${
          open ? 'w-0 opacity-0' : 'w-5 opacity-100'
        }`}
      />
      <span
        className={`block h-[2px] w-5 bg-white rounded-full transition-all duration-300 origin-center ${
          open ? '-rotate-45 -translate-y-[7px]' : ''
        }`}
      />
    </span>
  )
}

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setIsMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0d0f14]/95 backdrop-blur-md border-b border-blue-900/30 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
      maxWidth="2xl"
    >
      {/* Brand + hamburguesa (mobile) */}
      <NavbarContent justify="start">
        {/* Botón hamburguesa personalizado — visible solo en móvil/tablet */}
        <NavbarItem className="sm:hidden">
          <button
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setIsMenuOpen((v) => !v)}
            className="flex items-center justify-center w-9 h-9 rounded-lg hover:bg-white/8 transition-colors duration-200"
          >
            <HamburgerIcon open={isMenuOpen} />
          </button>
        </NavbarItem>

        <NavbarBrand>
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero') }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm font-display">M</span>
            </div>
            <span className="font-display font-semibold text-white text-sm md:text-base leading-tight">
              <span className="block">Mónica Sánchez</span>
              <span className="text-blue-400 text-xs font-normal">Fisioterapia</span>
            </span>
          </a>
        </NavbarBrand>
      </NavbarContent>

      {/* Nav links — solo desktop */}
      <NavbarContent className="hidden sm:flex gap-1" justify="center">
        {navLinks.map((link) => (
          <NavbarItem key={link.href}>
            <a
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
              className="text-gray-300 hover:text-white text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/5 transition-all duration-200"
            >
              {link.label}
            </a>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* CTA */}
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            size="sm"
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold hidden sm:flex"
            onPress={() => handleNavClick('#reservar')}
          >
            Reservar cita
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Menú móvil desplegable */}
      <NavbarMenu className="bg-[#0d0f14]/98 backdrop-blur-xl pt-6 border-t border-blue-900/20">
        {navLinks.map((link) => (
          <NavbarMenuItem key={link.href}>
            <a
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
              className="block text-gray-200 hover:text-white text-lg font-medium py-3 border-b border-white/5 w-full"
            >
              {link.label}
            </a>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Button
            className="mt-4 w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold"
            onPress={() => handleNavClick('#reservar')}
          >
            Reservar cita
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
}
