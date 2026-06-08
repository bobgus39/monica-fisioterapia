import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { motion } from 'framer-motion'

const specialties = [
  'Fisioterapia musculoesquelética',
  'Fisioterapia deportiva',
  'Neurorehabilitación',
  'Fisioterapia pediátrica',
  'Punción seca',
  'Pilates terapéutico',
]

const credentials = [
  { icon: '🎓', label: 'Grado en Fisioterapia', sub: 'Universidad de Alicante' },
  { icon: '📋', label: 'Colegiada ICOFCV', sub: 'Col. de Fisioterapeutas C. Valenciana' },
  { icon: '🏆', label: '+10 años de experiencia', sub: 'Práctica clínica especializada' },
]

export default function SobreMonica() {
  const [ref, isVisible] = useIntersectionObserver()

  return (
    <section id="sobre-monica" className="section-padding bg-[#0a0f1e] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-4"
        >
          La fisioterapeuta
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left — photo placeholder + frame */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Photo frame */}
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-[#111827] via-[#0f1a2e] to-[#0a0f1e] border border-blue-900/30 overflow-hidden shadow-2xl shadow-black/50 flex items-end">
                {/* Silhouette placeholder */}
                <div className="w-full h-full flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent" />
                  <svg className="w-48 h-48 text-blue-900/40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                  </svg>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="text-white font-display text-xl font-bold">Mónica Sánchez</div>
                    <div className="text-blue-300 text-sm">Fisioterapeuta · Castalla</div>
                  </div>
                </div>
              </div>

              {/* Credentials floating card */}
              <div className="absolute -right-6 top-8 bg-[#111827] border border-blue-900/40 rounded-xl p-4 shadow-xl w-48 hidden md:block">
                <div className="text-xs text-gray-400 mb-2">Especialidades</div>
                {specialties.slice(0, 3).map((s) => (
                  <div key={s} className="flex items-center gap-2 py-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    <span className="text-white text-xs leading-tight">{s}</span>
                  </div>
                ))}
              </div>

              {/* Experience badge */}
              <div className="absolute -left-4 bottom-12 bg-blue-600 rounded-xl p-4 shadow-xl shadow-blue-900/40 hidden md:block">
                <div className="text-white font-display text-2xl font-bold">+10</div>
                <div className="text-blue-100 text-xs">años de<br />experiencia</div>
              </div>
            </div>
          </motion.div>

          {/* Right — text */}
          <div className="order-1 lg:order-2">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
            >
              Tu fisioterapeuta de{' '}
              <span className="text-gradient-blue">confianza</span>{' '}
              en Castalla
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="space-y-4 text-gray-400 text-base leading-relaxed mb-8"
            >
              <p>
                Soy Mónica Sánchez, fisioterapeuta titulada con más de una
                década de experiencia ayudando a personas a recuperar su
                bienestar y calidad de vida. Mi enfoque combina rigor
                científico con un trato cercano y humano.
              </p>
              <p>
                Cada paciente es único. Por eso elaboro un plan de tratamiento
                personalizado, con evaluación exhaustiva, objetivos claros y
                seguimiento continuo hasta el alta. No me conformo con
                aliviar síntomas: busco la causa y la resuelvo.
              </p>
              <p>
                Desde 2014 atiendo en Castalla y comarca, siendo referente
                en fisioterapia deportiva, neurológica y del dolor crónico
                en la zona.
              </p>
            </motion.div>

            {/* Credentials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="grid sm:grid-cols-3 gap-4 mb-8"
            >
              {credentials.map((c, i) => (
                <div
                  key={c.label}
                  className="rounded-xl border border-blue-900/30 bg-[#0d1520] p-4"
                >
                  <div className="text-2xl mb-2">{c.icon}</div>
                  <div className="text-white text-sm font-semibold leading-tight mb-1">{c.label}</div>
                  <div className="text-gray-500 text-xs">{c.sub}</div>
                </div>
              ))}
            </motion.div>

            {/* Specialties */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap gap-2"
            >
              {specialties.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-blue-900/20 border border-blue-800/40 text-blue-300"
                >
                  {s}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
