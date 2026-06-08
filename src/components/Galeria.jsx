import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { motion } from 'framer-motion'

const items = [
  { label: 'Sala de tratamiento principal', aspect: 'tall', bg: 'from-blue-900/30 to-[#0a0f1e]' },
  { label: 'Zona de ejercicio terapéutico', aspect: 'wide', bg: 'from-indigo-900/25 to-[#070910]' },
  { label: 'Equipamiento de electroterapia', aspect: 'normal', bg: 'from-blue-800/25 to-[#0a0f1e]' },
  { label: 'Sala de pilates terapéutico', aspect: 'normal', bg: 'from-violet-900/20 to-[#070910]' },
  { label: 'Área de recepción', aspect: 'wide', bg: 'from-blue-900/20 to-[#0d0f14]' },
  { label: 'Equipamiento de ultrasonidos', aspect: 'normal', bg: 'from-cyan-900/20 to-[#0a0f1e]' },
]

const IconPlaceholder = () => (
  <svg className="w-12 h-12 text-blue-800/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
  </svg>
)

export default function Galeria() {
  const [ref, isVisible] = useIntersectionObserver()

  return (
    <section id="galeria" className="section-padding bg-[#0d0f14] relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-4"
          >
            Instalaciones
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Nuestro centro
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Instalaciones modernas, equipamiento de última generación y un
            ambiente pensado para tu bienestar y recuperación.
          </motion.p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br ${item.bg} ${
                i === 0 ? 'row-span-2' : ''
              } ${i === 4 ? 'col-span-2 md:col-span-1' : ''} hover:border-blue-600/30 transition-all duration-300`}
              style={{ minHeight: i === 0 ? '320px' : '160px' }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <IconPlaceholder />
                <div className="text-gray-600 text-xs text-center px-4 leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.label}
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Label badge */}
              <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="bg-black/70 backdrop-blur-sm rounded-lg px-3 py-1.5">
                  <span className="text-white text-xs">{item.label}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-gray-600 text-sm mt-6"
        >
          Las imágenes del centro se actualizarán próximamente
        </motion.p>
      </div>
    </section>
  )
}
