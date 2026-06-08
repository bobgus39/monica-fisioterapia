import { useState } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { motion, AnimatePresence } from 'framer-motion'

const testimonios = [
  {
    nombre: 'Carlos M.',
    tratamiento: 'Fisioterapia deportiva',
    texto: 'Llevaba meses con una tendinopatía rotuliana que me impedía correr. Mónica me hizo una valoración exhaustiva y diseñó un plan de recuperación que fue al grano. En 6 semanas volví a entrenar. Profesionalidad y cercanía en la misma persona.',
    estrellas: 5,
  },
  {
    nombre: 'Laura G.',
    tratamiento: 'Rehabilitación post-operatoria',
    texto: 'Tras mi operación de ligamento cruzado, el proceso de rehabilitación fue más llevadero gracias a Mónica. Siempre explicaba cada técnica y por qué la aplicaba. Los resultados superaron mis expectativas. Totalmente recomendable.',
    estrellas: 5,
  },
  {
    nombre: 'Rosa T.',
    tratamiento: 'Tratamiento del dolor crónico',
    texto: 'Sufría de fibromialgia desde hace años y ya había perdido la esperanza. Mónica fue la primera profesional que me escuchó de verdad y estableció un plan realista. He mejorado considerablemente la calidad de vida. Gracias de corazón.',
    estrellas: 5,
  },
  {
    nombre: 'Miguel A.',
    tratamiento: 'Punción seca',
    texto: 'El dolor de cuello me tenía bloqueado desde hacía meses. Con la punción seca y las movilizaciones, conseguí en pocas sesiones lo que no había logrado en años. Centro muy bien equipado y atención inmejorable.',
    estrellas: 5,
  },
  {
    nombre: 'Elena F.',
    tratamiento: 'Fisioterapia neurológica',
    texto: 'Mi madre tuvo un ictus y Mónica lleva la rehabilitación neurológica con una dedicación y un conocimiento que nos ha sorprendido a toda la familia. Avanza cada semana. No podríamos estar más contentos.',
    estrellas: 5,
  },
  {
    nombre: 'Pablo S.',
    tratamiento: 'Pilates terapéutico',
    texto: 'Empecé el pilates terapéutico por una hernia lumbar y ha sido un antes y un después. No solo me ha quitado el dolor, sino que he aprendido a moverme mejor. Las clases son en grupos pequeños y el nivel de atención es excelente.',
    estrellas: 5,
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? 'text-amber-400' : 'text-gray-700'}`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonios() {
  const [ref, isVisible] = useIntersectionObserver()
  const [current, setCurrent] = useState(0)
  const [dir, setDir] = useState(1)

  const prev = () => {
    setDir(-1)
    setCurrent((c) => (c === 0 ? testimonios.length - 1 : c - 1))
  }

  const next = () => {
    setDir(1)
    setCurrent((c) => (c === testimonios.length - 1 ? 0 : c + 1))
  }

  const variants = {
    enter: (d) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (d) => ({ opacity: 0, x: d > 0 ? -60 : 60 }),
  }

  return (
    <section id="testimonios" className="section-padding bg-[#070910] relative overflow-hidden">
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(37,99,235,0.08) 0%, transparent 70%)',
      }} />

      <div className="max-w-5xl mx-auto" ref={ref}>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-4"
          >
            Testimonios
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Lo que dicen nuestros pacientes
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          {/* Main testimonial */}
          <div className="relative overflow-hidden rounded-2xl border border-blue-900/30 bg-gradient-to-br from-[#111827] to-[#0a0f1e] p-8 md:p-12 mb-8">
            <div className="absolute top-6 left-8 text-blue-600/20 font-display text-[120px] leading-none font-bold select-none pointer-events-none">
              "
            </div>

            <AnimatePresence custom={dir} mode="wait">
              <motion.div
                key={current}
                custom={dir}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10"
              >
                <Stars count={testimonios[current].estrellas} />
                <blockquote className="text-gray-200 text-lg md:text-xl leading-relaxed my-6">
                  "{testimonios[current].texto}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600/20 border border-blue-600/30 flex items-center justify-center font-display font-bold text-blue-300">
                    {testimonios[current].nombre[0]}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonios[current].nombre}</div>
                    <div className="text-blue-400 text-sm">{testimonios[current].tratamiento}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {testimonios.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDir(i > current ? 1 : -1); setCurrent(i) }}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-6 h-2 bg-blue-500'
                      : 'w-2 h-2 bg-gray-700 hover:bg-gray-600'
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-600/50 transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-600/50 transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Mini grid — extra testimonials */}
        <div className="grid sm:grid-cols-3 gap-4 mt-8">
          {testimonios.map((t, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.07 }}
              onClick={() => { setDir(i > current ? 1 : -1); setCurrent(i) }}
              className={`text-left p-4 rounded-xl border transition-all duration-300 ${
                i === current
                  ? 'border-blue-600/50 bg-blue-600/10'
                  : 'border-white/5 bg-white/[0.02] hover:border-blue-900/40'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-300 text-xs font-bold font-display">
                  {t.nombre[0]}
                </div>
                <div>
                  <div className="text-white text-xs font-semibold">{t.nombre}</div>
                  <div className="text-gray-500 text-[10px]">{t.tratamiento}</div>
                </div>
              </div>
              <Stars count={t.estrellas} />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
