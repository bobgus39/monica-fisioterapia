import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { motion } from 'framer-motion'

const tratamientos = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75a2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    nombre: 'Fisioterapia general y valoración',
    desc: 'Evaluación completa del aparato locomotor, diagnóstico funcional y tratamiento de lesiones musculares, articulares y posturales.',
    color: 'from-blue-600/20 to-blue-900/10',
    accent: 'border-blue-600/40',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
    nombre: 'Fisioterapia deportiva',
    desc: 'Prevención y recuperación de lesiones deportivas, optimización del rendimiento y reincorporación segura al deporte.',
    color: 'from-blue-500/20 to-blue-800/10',
    accent: 'border-blue-500/40',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    nombre: 'Rehabilitación post-operatoria',
    desc: 'Protocolo específico post-cirugía ortopédica: prótesis de cadera/rodilla, artroscopias, reparaciones de ligamentos y tendones.',
    color: 'from-indigo-600/20 to-indigo-900/10',
    accent: 'border-indigo-600/40',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
      </svg>
    ),
    nombre: 'Fisioterapia neurológica',
    desc: 'Rehabilitación de patologías neurológicas: ictus, esclerosis múltiple, Parkinson, lesiones medulares y TCE.',
    color: 'from-violet-600/20 to-violet-900/10',
    accent: 'border-violet-600/40',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
    nombre: 'Tratamiento del dolor crónico',
    desc: 'Abordaje multimodal del dolor persistente: fibromialgia, dolor lumbar crónico, cefaleas tensionales y neuropático.',
    color: 'from-amber-600/15 to-amber-900/10',
    accent: 'border-amber-600/30',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    nombre: 'Fisioterapia pediátrica',
    desc: 'Atención especializada en bebés y niños: tortícolis, plagiocefalia, retrasos del desarrollo motor y escoliosis infantil.',
    color: 'from-green-600/15 to-green-900/10',
    accent: 'border-green-600/30',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    nombre: 'Punción seca',
    desc: 'Técnica invasiva con aguja fina para el tratamiento de puntos gatillo miofasciales y dolor muscular de origen central.',
    color: 'from-rose-600/15 to-rose-900/10',
    accent: 'border-rose-600/30',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    nombre: 'Electroterapia y ultrasonidos',
    desc: 'TENS, corrientes interferenciales, microondas y ultrasonidos para analgesia, regeneración tisular y reducción de edemas.',
    color: 'from-cyan-600/15 to-cyan-900/10',
    accent: 'border-cyan-600/30',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    nombre: 'Vendaje neuromuscular',
    desc: 'Kinesiotaping funcional para soporte muscular-articular, mejora de la propiocepción y reducción del dolor sin limitar el movimiento.',
    color: 'from-teal-600/15 to-teal-900/10',
    accent: 'border-teal-600/30',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    nombre: 'Pilates terapéutico',
    desc: 'Ejercicio terapéutico supervisado para mejorar el control motor, la postura, la estabilidad del core y la calidad de vida.',
    color: 'from-purple-600/15 to-purple-900/10',
    accent: 'border-purple-600/30',
  },
]

function TratamientoCard({ tratamiento, index, isVisible }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative rounded-2xl border ${tratamiento.accent} bg-gradient-to-br ${tratamiento.color} backdrop-blur-sm p-6 card-hover cursor-default`}
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-300 flex-shrink-0 group-hover:border-blue-500/50 transition-colors duration-300">
          {tratamiento.icon}
        </div>
        <div>
          <h3 className="font-display text-white font-semibold text-base mb-2 leading-tight">
            {tratamiento.nombre}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            {tratamiento.desc}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Tratamientos() {
  const [ref, isVisible] = useIntersectionObserver()

  return (
    <section id="tratamientos" className="section-padding bg-[#0d0f14] relative">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-900/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-4"
          >
            Especialidades
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Tratamientos especializados
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Cada tratamiento está diseñado y supervisado personalmente por Mónica,
            adaptado a tu condición y objetivos concretos.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {tratamientos.map((t, i) => (
            <TratamientoCard key={t.nombre} tratamiento={t} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}
