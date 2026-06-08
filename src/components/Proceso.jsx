import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { motion } from 'framer-motion'

const pasos = [
  {
    numero: '01',
    titulo: 'Valoración inicial',
    desc: 'Entrevista clínica completa, historial médico y exploración física exhaustiva para conocer tu situación real.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    numero: '02',
    titulo: 'Diagnóstico funcional',
    desc: 'Identificación precisa de la causa raíz del problema, no solo del síntoma. Diagnóstico diferencial con herramientas clínicas.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    numero: '03',
    titulo: 'Plan personalizado',
    desc: 'Diseño de un protocolo de tratamiento individualizado con objetivos medibles, calendario de sesiones y criterios de alta.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    numero: '04',
    titulo: 'Tratamiento activo',
    desc: 'Sesiones de fisioterapia con técnicas manuales, electroterapia y ejercicio terapéutico. Progresión controlada y ajuste continuo.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    numero: '05',
    titulo: 'Alta y seguimiento',
    desc: 'Evaluación final de resultados, pauta de ejercicios domiciliarios y seguimiento preventivo para mantener la mejoría a largo plazo.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

export default function Proceso() {
  const [ref, isVisible] = useIntersectionObserver()

  return (
    <section id="proceso" className="section-padding bg-[#070910] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(37,99,235,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(37,99,235,0.15) 0%, transparent 50%)',
      }} />

      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-4"
          >
            Metodología
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Proceso de tratamiento
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Un protocolo estructurado y transparente, donde tú sabes en
            todo momento dónde estás y hacia dónde vamos.
          </motion.p>
        </div>

        {/* Timeline — horizontal on desktop, vertical on mobile */}
        <div className="relative">
          {/* Horizontal connector (desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-600/40 to-transparent z-0" />

          {/* Progress line animated */}
          {isVisible && (
            <motion.div
              className="hidden lg:block absolute top-[52px] left-0 h-px bg-gradient-to-r from-blue-600 to-blue-400 z-0"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
            />
          )}

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {pasos.map((paso, i) => (
              <motion.div
                key={paso.numero}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-start lg:items-center lg:text-center relative"
              >
                {/* Vertical connector (mobile) */}
                {i < pasos.length - 1 && (
                  <div className="absolute left-[23px] top-[52px] bottom-0 w-px bg-blue-900/40 lg:hidden" />
                )}

                {/* Node */}
                <div className="relative flex-shrink-0 mb-5">
                  <div className="w-12 h-12 rounded-full bg-blue-600/20 border-2 border-blue-600/60 flex items-center justify-center text-blue-300 z-10 relative">
                    {paso.icon}
                  </div>
                  <div className="absolute inset-0 rounded-full bg-blue-600/10 blur-md" />
                  <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#070910] border border-blue-600/40 flex items-center justify-center">
                    <span className="text-blue-400 text-[9px] font-bold font-display">{paso.numero}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="pl-4 lg:pl-0">
                  <h3 className="font-display text-white font-semibold text-base mb-2">
                    {paso.titulo}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {paso.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
