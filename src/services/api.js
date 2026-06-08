const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

export async function enviarCita(datos) {
  const response = await fetch(`${API_URL}/api/citas`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos),
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({}))
    throw new Error(error.message || 'Error al enviar la solicitud')
  }

  return response.json()
}
