# Centro de Fisioterapia Mónica Sánchez

Web profesional para el Centro de Fisioterapia Mónica Sánchez, Castalla (Alicante).

## Stack

- **Frontend**: React 19 + Vite 8 + Tailwind CSS 3 + HeroUI v2 + Framer Motion
- **Backend**: Node.js + Express 5 + MySQL 2
- **Despliegue**: GitHub Pages (HashRouter) + servidor propio para API

---

## Instalación local

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/monica-fisioterapia.git
cd monica-fisioterapia
```

### 2. Frontend

```bash
npm install
# edita .env si el backend no está en localhost:3001
npm run dev
```

La app se sirve en `http://localhost:5173`

### 3. Backend

```bash
cd backend
npm install
# edita backend/.env con credenciales reales de MySQL
```

Crea la base de datos:

```bash
mysql -u root -p < backend/schema.sql
```

Arranca el servidor:

```bash
cd backend && npm start
# o en modo desarrollo:
npm run dev
```

La API queda en `http://localhost:3001`

---

## Variables de entorno

### Frontend (`.env`)

| Variable | Descripción | Ejemplo |
|---|---|---|
| `VITE_API_URL` | URL base del backend | `http://localhost:3001` |

### Backend (`backend/.env`)

| Variable | Descripción |
|---|---|
| `PORT` | Puerto del servidor API (default: 3001) |
| `DB_HOST` | Host de MySQL |
| `DB_PORT` | Puerto de MySQL (default: 3306) |
| `DB_USER` | Usuario de MySQL |
| `DB_PASSWORD` | Contraseña de MySQL |
| `DB_NAME` | Nombre de la base de datos |
| `FRONTEND_URL` | URL del frontend para CORS |

---

## Despliegue en GitHub Pages

`vite.config.js` ya tiene `base: '/monica-fisioterapia/'` y el router usa `HashRouter`.

### Deploy manual

```bash
npm run build
# Sube el contenido de /dist a la rama gh-pages
```

### Deploy con gh-pages

```bash
npm install -D gh-pages
```

Añade en `package.json`:
```json
"deploy": "npm run build && gh-pages -d dist"
```

```bash
npm run deploy
```

En **Settings del repo → Pages**: Source → `gh-pages` / `/ (root)`

URL resultante: `https://tu-usuario.github.io/monica-fisioterapia/`

---

## API REST

### `POST /api/citas`

```json
{
  "nombre": "María García",
  "telefono": "+34 666 123 456",
  "email": "maria@email.com",
  "servicio": "Fisioterapia deportiva",
  "fecha": "2026-06-20",
  "mensaje": "Lesión de rodilla por running"
}
```

**Respuesta 201:** `{ "message": "Solicitud de cita recibida correctamente", "id": 42 }`

### `GET /api/health` — Health check

### `GET /api/citas` — Lista citas (panel admin)

---

## Estructura

```
/
├── src/
│   ├── components/       # Un archivo por sección
│   ├── pages/Home.jsx
│   ├── hooks/useIntersectionObserver.js
│   ├── services/api.js
│   ├── main.jsx
│   └── index.css
├── backend/
│   ├── index.js          # Express API
│   ├── db.js             # Pool MySQL
│   └── schema.sql
├── tailwind.config.cjs
├── postcss.config.cjs
└── vite.config.js
```

---

## Personalización

- **Teléfono y email reales**: busca `+34 XXX XXX XXX` e `info@monicafisioterapia.es` y reemplaza.
- **Fotos reales**: sustituye los placeholders SVG en [SobreMonica.jsx](src/components/SobreMonica.jsx) y [Galeria.jsx](src/components/Galeria.jsx).
- **Redes sociales**: actualiza los `href="#"` en [Contacto.jsx](src/components/Contacto.jsx) y [Footer.jsx](src/components/Footer.jsx).
