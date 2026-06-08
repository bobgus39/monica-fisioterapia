const express = require('express')
const cors = require('cors')
const { body, validationResult } = require('express-validator')
require('dotenv').config()

const pool = require('./db')

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}))
app.use(express.json())

// Health check
app.get('/api/health', (_, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// POST /api/citas — crear solicitud de cita
const citaValidators = [
  body('nombre').trim().notEmpty().withMessage('El nombre es obligatorio').isLength({ max: 150 }),
  body('telefono').trim().notEmpty().withMessage('El teléfono es obligatorio').isLength({ max: 30 }),
  body('email').trim().isEmail().withMessage('Email inválido').normalizeEmail(),
  body('servicio').trim().notEmpty().withMessage('El servicio es obligatorio').isLength({ max: 200 }),
  body('fecha').optional({ nullable: true, checkFalsy: true }).isDate().withMessage('Fecha inválida'),
  body('mensaje').optional().trim().isLength({ max: 2000 }),
]

app.post('/api/citas', citaValidators, async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: 'Datos inválidos', errors: errors.array() })
  }

  const { nombre, telefono, email, servicio, fecha, mensaje } = req.body

  try {
    const [result] = await pool.execute(
      `INSERT INTO citas (nombre, telefono, email, servicio, fecha_preferida, mensaje)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [nombre, telefono, email, servicio, fecha || null, mensaje || null]
    )

    res.status(201).json({
      message: 'Solicitud de cita recibida correctamente',
      id: result.insertId,
    })
  } catch (err) {
    console.error('Error al insertar cita:', err.message)
    res.status(500).json({ message: 'Error interno del servidor. Inténtalo de nuevo.' })
  }
})

// GET /api/citas — listar citas (protegido en producción con auth)
app.get('/api/citas', async (req, res) => {
  try {
    const [rows] = await pool.execute(
      'SELECT id, nombre, email, servicio, fecha_preferida, estado, created_at FROM citas ORDER BY created_at DESC LIMIT 100'
    )
    res.json({ citas: rows })
  } catch (err) {
    console.error('Error al obtener citas:', err.message)
    res.status(500).json({ message: 'Error interno del servidor' })
  }
})

// 404 fallback
app.use((_, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' })
})

// Error handler
app.use((err, _req, res, _next) => {
  console.error(err.stack)
  res.status(500).json({ message: 'Error interno del servidor' })
})

app.listen(PORT, () => {
  console.log(`✅ Servidor API corriendo en http://localhost:${PORT}`)
})
