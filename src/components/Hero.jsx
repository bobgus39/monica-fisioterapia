import { useEffect, useState } from 'react'
import { Button } from '@heroui/react'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100)
    return () => clearTimeout(t)
  }, [])

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#070910]"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(37,99,235,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37,99,235,0.15) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-blue-800/8 blur-[100px] pointer-events-none" />

      {/* Decorative lines */}
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-blue-600/30 to-transparent hidden lg:block" />
      <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-blue-600/20 to-transparent hidden lg:block" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left — text */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-600/30 bg-blue-600/10 text-blue-300 text-xs font-medium mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Centro de Fisioterapia · Castalla, Alicante
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...fadeUp(0.15)}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
            >
              Fisioterapia{' '}
              <span className="text-gradient">experta.</span>
              <br />
              Recuperación{' '}
              <span className="text-gradient-blue">real.</span>
            </motion.h1>

            {/* Subclaim */}
            <motion.p
              {...fadeUp(0.3)}
              className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10"
            >
              Tu cuerpo en las mejores manos. Tratamiento personalizado,
              diagnóstico preciso y resultados medibles con Mónica Sánchez,
              fisioterapeuta titulada y colegiada en Castalla.
            </motion.p>

            {/* CTA */}
            <motion.div {...fadeUp(0.45)} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 text-base shadow-lg shadow-blue-900/40"
                onPress={() => scrollTo('#reservar')}
              >
                Reservar cita
              </Button>
              <Button
                size="lg"
                variant="bordered"
                className="border-blue-600/40 hover:border-blue-500 text-white font-medium px-8 text-base hover:bg-blue-600/10"
                onPress={() => scrollTo('#tratamientos')}
              >
                Ver tratamientos
              </Button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              {...fadeUp(0.6)}
              className="mt-14 flex flex-wrap justify-center lg:justify-start gap-8"
            >
              {[
                { value: '+10', label: 'Años de experiencia' },
                { value: '+1.200', label: 'Pacientes tratados' },
                { value: '10', label: 'Especialidades' },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="font-display text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-gray-500 text-sm mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — visual panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block relative"
          >
            {/* Card panel */}
            <div className="relative mx-auto max-w-md">
              <div className="rounded-2xl border border-blue-900/40 bg-gradient-to-br from-[#111827] to-[#0a0f1e] p-8 shadow-2xl shadow-black/50">
                {/* Inner content */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-600/30 flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Valoración inicial</div>
                    <div className="text-gray-400 text-sm">Diagnóstico personalizado</div>
                  </div>
                </div>

                {[
                  { label: 'Fisioterapia deportiva', active: true },
                  { label: 'Rehabilitación post-op', active: false },
                  { label: 'Tratamiento del dolor', active: false },
                  { label: 'Punción seca', active: false },
                ].map((item, i) => (
                  <div
                    key={item.label}
                    className={`flex items-center gap-3 py-3 border-b border-white/5 last:border-0 ${item.active ? 'text-white' : 'text-gray-500'}`}
                  >
                    <div className={`w-2 h-2 rounded-full flex-shrink-0 ${item.active ? 'bg-blue-400' : 'bg-gray-700'}`} />
                    <span className="text-sm">{item.label}</span>
                  </div>
                ))}

                <div className="mt-6 p-4 rounded-xl bg-blue-600/10 border border-blue-600/20">
                  <div className="text-blue-300 text-xs font-medium mb-1">Centro especializado</div>
                  <div className="text-white text-sm font-medium">Av. de Onil, 43 · Castalla</div>
                  <div className="text-gray-400 text-xs mt-1">Lun–Vie · 9:00–20:00</div>
                </div>
              </div>

              {/* Decorative dots */}
              <div className="absolute -top-4 -right-4 grid grid-cols-4 gap-2 opacity-30">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                ))}
              </div>
              <div className="absolute -bottom-4 -left-4 grid grid-cols-4 gap-2 opacity-20">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent" />
      </motion.div>
    </section>
  )
}
