const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Sobre Mónica', href: '#sobre-monica' },
  { label: 'Tratamientos', href: '#tratamientos' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Por qué elegirnos', href: '#por-que' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Reservar cita', href: '#reservar' },
  { label: 'Contacto', href: '#contacto' },
]

const legalLinks = [
  { label: 'Aviso legal', href: '#' },
  { label: 'Política de privacidad', href: '#' },
  { label: 'Política de cookies', href: '#' },
]

export default function Footer() {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#070910] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm font-display">M</span>
              </div>
              <div>
                <div className="text-white font-display font-semibold text-sm">Mónica Sánchez</div>
                <div className="text-blue-400 text-xs">Centro de Fisioterapia</div>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Fisioterapia experta y trato personalizado en Castalla, Alicante.
              Recupera tu bienestar con la fisioterapeuta de referencia en la zona.
            </p>
            <div className="text-gray-600 text-xs">
              Av. de Onil, 43 · 03420 Castalla, Alicante
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-white text-sm font-semibold font-display mb-4">Navegación</div>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                    className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact quick */}
          <div>
            <div className="text-white text-sm font-semibold font-display mb-4">Contacto rápido</div>
            <div className="space-y-3">
              <div>
                <div className="text-gray-600 text-xs uppercase tracking-wider mb-1">Teléfono</div>
                <div className="text-gray-400 text-sm">+34 XXX XXX XXX</div>
              </div>
              <div>
                <div className="text-gray-600 text-xs uppercase tracking-wider mb-1">Email</div>
                <div className="text-gray-400 text-sm">info@monicafisioterapia.es</div>
              </div>
              <div>
                <div className="text-gray-600 text-xs uppercase tracking-wider mb-1">Horario</div>
                <div className="text-gray-400 text-sm">Lun–Vie: 9:00–14:00 · 16:00–20:00</div>
              </div>
            </div>

            <button
              onClick={() => scrollTo('#reservar')}
              className="mt-6 w-full py-2.5 rounded-xl border border-blue-600/40 text-blue-400 hover:bg-blue-600/10 hover:border-blue-500 text-sm font-medium transition-all duration-200"
            >
              Reservar cita
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-600 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Centro de Fisioterapia Mónica Sánchez. Todos los derechos reservados.
          </div>
          <div className="flex gap-5 flex-wrap justify-center">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-600 hover:text-gray-400 text-xs transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
