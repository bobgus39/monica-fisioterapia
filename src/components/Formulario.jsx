import { useState } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { motion } from 'framer-motion'
import { Button, Input, Select, SelectItem, Textarea } from '@heroui/react'
import { enviarCita } from '../services/api'

const servicios = [
  'Fisioterapia general y valoración',
  'Fisioterapia deportiva',
  'Rehabilitación post-operatoria',
  'Fisioterapia neurológica',
  'Tratamiento del dolor crónico',
  'Fisioterapia pediátrica',
  'Punción seca',
  'Electroterapia y ultrasonidos',
  'Vendaje neuromuscular (kinesiotaping)',
  'Pilates terapéutico',
]

const inputStyles = {
  inputWrapper: [
    'bg-[#111827]',
    'border',
    'border-white/10',
    'hover:border-blue-600/50',
    'group-data-[focus=true]:border-blue-500',
    'rounded-xl',
  ],
  input: ['text-white', 'placeholder:text-gray-600'],
  label: ['text-gray-400', 'text-sm'],
}

export default function Formulario() {
  const [ref, isVisible] = useIntersectionObserver()
  const [form, setForm] = useState({
    nombre: '',
    telefono: '',
    email: '',
    servicio: '',
    fecha: '',
    mensaje: '',
  })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const update = (field) => (val) => setForm((f) => ({ ...f, [field]: val }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.nombre || !form.telefono || !form.email || !form.servicio) {
      setErrorMsg('Por favor, rellena todos los campos obligatorios.')
      setStatus('error')
      return
    }
    setStatus('loading')
    setErrorMsg('')
    try {
      await enviarCita(form)
      setStatus('success')
      setForm({ nombre: '', telefono: '', email: '', servicio: '', fecha: '', mensaje: '' })
    } catch (err) {
      setErrorMsg(err.message || 'Ha ocurrido un error. Inténtalo de nuevo.')
      setStatus('error')
    }
  }

  return (
    <section id="reservar" className="section-padding bg-[#070910] relative overflow-hidden">
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(37,99,235,0.08) 0%, transparent 60%)',
      }} />

      <div className="max-w-5xl mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-4">
              Reserva de cita
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Tu primera sesión
              <br />
              <span className="text-gradient-blue">sin compromiso</span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              Rellena el formulario y nos pondremos en contacto contigo
              en menos de 24 horas para confirmar tu cita y resolver
              cualquier duda.
            </p>

            <div className="space-y-4">
              {[
                { icon: '📍', text: 'Av. de Onil, 43, 03420 Castalla, Alicante' },
                { icon: '📞', text: '+34 XXX XXX XXX' },
                { icon: '📧', text: 'info@monicafisioterapia.es' },
                { icon: '🕐', text: 'Lun–Vie: 9:00–14:00 y 16:00–20:00' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 text-gray-400 text-sm">
                  <span className="text-xl w-7 flex-shrink-0">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {status === 'success' ? (
              <div className="rounded-2xl border border-green-500/30 bg-green-500/10 p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display text-white text-xl font-bold mb-2">¡Solicitud enviada!</h3>
                <p className="text-gray-400 text-sm mb-6">
                  Hemos recibido tu solicitud. Nos pondremos en contacto contigo
                  en menos de 24 horas para confirmar tu cita.
                </p>
                <Button
                  variant="bordered"
                  className="border-white/20 text-white"
                  onPress={() => setStatus('idle')}
                >
                  Hacer otra reserva
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-white/5 bg-gradient-to-br from-[#111827] to-[#0a0f1e] p-6 md:p-8 space-y-5"
              >
                {/* Row 1 */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    label="Nombre completo"
                    labelPlacement="outside"
                    placeholder="Tu nombre"
                    value={form.nombre}
                    onValueChange={update('nombre')}
                    isRequired
                    classNames={inputStyles}
                  />
                  <Input
                    label="Teléfono"
                    labelPlacement="outside"
                    placeholder="+34 XXX XXX XXX"
                    type="tel"
                    value={form.telefono}
                    onValueChange={update('telefono')}
                    isRequired
                    classNames={inputStyles}
                  />
                </div>

                {/* Row 2 */}
                <Input
                  label="Email"
                  labelPlacement="outside"
                  placeholder="tu@email.com"
                  type="email"
                  value={form.email}
                  onValueChange={update('email')}
                  isRequired
                  classNames={inputStyles}
                />

                {/* Row 3 */}
                <Select
                  label="Tratamiento de interés"
                  labelPlacement="outside"
                  placeholder="Selecciona un tratamiento"
                  selectedKeys={form.servicio ? new Set([form.servicio]) : new Set()}
                  onSelectionChange={(keys) => update('servicio')([...keys][0] || '')}
                  isRequired
                  classNames={{
                    trigger: ['bg-[#111827]', 'border', 'border-white/10', 'hover:border-blue-600/50', 'rounded-xl'],
                    value: ['text-white'],
                    label: ['text-gray-400', 'text-sm'],
                    popoverContent: ['bg-[#111827]', 'border', 'border-white/10'],
                  }}
                >
                  {servicios.map((s) => (
                    <SelectItem key={s} className="text-white hover:bg-blue-600/20">
                      {s}
                    </SelectItem>
                  ))}
                </Select>

                {/* Row 4 */}
                <Input
                  label="Fecha preferida"
                  labelPlacement="outside"
                  type="date"
                  value={form.fecha}
                  onValueChange={update('fecha')}
                  classNames={inputStyles}
                />

                {/* Row 5 */}
                <Textarea
                  label="Mensaje adicional (opcional)"
                  labelPlacement="outside"
                  placeholder="Cuéntanos brevemente tu situación o cualquier consulta..."
                  value={form.mensaje}
                  onValueChange={update('mensaje')}
                  minRows={3}
                  maxRows={5}
                  classNames={inputStyles}
                />

                {status === 'error' && (
                  <div className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
                    {errorMsg}
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  isLoading={status === 'loading'}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base"
                >
                  {status === 'loading' ? 'Enviando...' : 'Solicitar cita'}
                </Button>

                <p className="text-gray-600 text-xs text-center">
                  Al enviar este formulario aceptas nuestra{' '}
                  <span className="text-gray-500 cursor-pointer hover:text-gray-400">política de privacidad</span>.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
