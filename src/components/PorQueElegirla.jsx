import { useEffect, useRef, useState } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { motion } from 'framer-motion'

function useCounter(end, duration = 2000, start = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    const startTime = performance.now()
    const endNum = parseInt(end.replace(/\D/g, ''), 10)

    const tick = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * endNum))
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [start, end, duration])

  return count
}

const stats = [
  { value: '+10', label: 'Años de experiencia', suffix: '' },
  { value: '+1200', label: 'Pacientes tratados', suffix: '' },
  { value: '10', label: 'Especialidades', suffix: '' },
  { value: '100', label: 'Satisfacción de pacientes', suffix: '%' },
]

const diferenciadores = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    titulo: 'Titulada y colegiada',
    desc: 'Grado universitario en Fisioterapia y colegiación activa en el ICOFCV. Formación continua y práctica basada en la evidencia.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    titulo: 'Trato 100% personalizado',
    desc: 'Ningún protocolo genérico. Cada tratamiento se diseña específicamente para ti, tus objetivos y tu ritmo de vida.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    titulo: 'Equipamiento moderno',
    desc: 'Equipos de electroterapia, ultrasonidos, láser y material de última generación para tratamientos más efectivos.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    titulo: 'Resultados medibles',
    desc: 'Evaluación funcional objetiva al inicio y al final del tratamiento. Tú puedes ver tu evolución real con datos.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    titulo: 'Referente en Castalla',
    desc: 'Más de una década siendo el centro de fisioterapia de referencia en Castalla y la comarca del Alt Vinalopó.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    titulo: 'Atención cercana y humana',
    desc: 'Te escucho, te explico y te acompaño. La recuperación es un proceso y lo hacemos juntos desde el primer día.',
  },
]

function StatCounter({ stat, start }) {
  const num = useCounter(stat.value, 2000, start)
  const prefix = stat.value.startsWith('+') ? '+' : ''
  return (
    <div className="text-center p-6 rounded-2xl border border-blue-900/30 bg-[#0a0f1e]">
      <div className="font-display text-4xl md:text-5xl font-bold text-white mb-2">
        {prefix}{num.toLocaleString('es-ES')}{stat.suffix}
      </div>
      <div className="text-gray-400 text-sm">{stat.label}</div>
    </div>
  )
}

export default function PorQueElegirla() {
  const [ref, isVisible] = useIntersectionObserver()

  return (
    <section id="por-que" className="section-padding bg-[#0a0f1e] relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-900/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-4"
          >
            Diferenciadores
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-white mb-4"
          >
            ¿Por qué elegir a Mónica?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            No todos los centros de fisioterapia son iguales. Aquí hay razones concretas
            por las que nuestros pacientes eligen a Mónica y no vuelven a cambiar.
          </motion.p>
        </div>

        {/* Stats counters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat) => (
            <StatCounter key={stat.label} stat={stat} start={isVisible} />
          ))}
        </motion.div>

        {/* Diferenciadores grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {diferenciadores.map((d, i) => (
            <motion.div
              key={d.titulo}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent p-6 hover:border-blue-600/30 hover:bg-blue-600/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-600/20 flex items-center justify-center text-blue-400 mb-4 group-hover:border-blue-500/40 transition-colors duration-300">
                {d.icon}
              </div>
              <h3 className="font-display text-white font-semibold text-base mb-2">{d.titulo}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{d.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
