# 🎧 Spotify Stats Web App

Aplicación web que permite a los usuarios iniciar sesión con su cuenta de Spotify y visualizar sus canciones más escuchadas mediante una gráfica y un listado.

---

## 🚀 Funcionalidades

- 🔐 Inicio de sesión con Spotify (OAuth)
- 🎵 Consulta de canciones más escuchadas (top tracks)
- 📊 Gráfico de barras de popularidad
- 📋 Listado de canciones y artistas
- ❌ Cierre de sesión completo (incluye logout en Spotify)
- ⚠️ Mensajes claros en caso de errores o falta de historial

---

## 🛠️ Tecnologías Usadas

- **React + TypeScript**
- **React Router DOM**
- **Recharts** (gráficas)
- **Spotify Web API**
- **Fetch API**
- **Vercel** (para despliegue)

---

## 📁 Estructura del Proyecto

```
src/
├── components/
│   └── Login.tsx
│   └── TopTracksChart.tsx
├── hooks/
│   └── useSpotifyToken.ts
├── pages/
│   └── Home.tsx
│   └── Dashboard.tsx
│   └── Goodbye.tsx
├── App.tsx
└── main.tsx
```

---

## 🔐 Login con Spotify

Utiliza el flujo **Implicit Grant Flow** con los siguientes parámetros:

- `client_id`
- `redirect_uri`
- `response_type=token`
- `scope=user-top-read`

El token se guarda en `localStorage`.

---

## 🎧 API Spotify Usada

- Endpoint: `https://api.spotify.com/v1/me/top/tracks?limit=10`
- Header:
  ```
  Authorization: Bearer [ACCESS_TOKEN]
  ```
- Se obtiene:
  - Nombre de canción
  - Artistas
  - Popularidad

---

## 📊 Visualización

- **Lista de canciones y artistas**
- **Gráfico de barras** con la popularidad de cada canción (usando `Recharts`)

---

## ❌ Logout

- El botón "Salir" borra el token local
- Redirige a una pantalla de despedida (`/goodbye`)
- Se realiza logout global en Spotify (`https://accounts.spotify.com/logout`)
- Luego regresa automáticamente a la pantalla de inicio

---

## ⚠️ Manejo de errores

- `403 Forbidden`: si el usuario no tiene suficiente historial musical
- Mensaje personalizado con sugerencia: _"Escucha música en Spotify y vuelve más tarde."_
- Botón con enlace directo a Spotify Web

---

## ✅ Requisitos para Ejecutar

1. Tener Node.js y npm instalados
2. Clonar el repositorio
3. Instalar dependencias:
   ```bash
   npm install
   ```
4. Ejecutar:
   ```bash
   npm run dev
   ```
5. Configurar tu app de Spotify en:
   [https://developer.spotify.com/dashboard](https://developer.spotify.com/dashboard)

6. Registrar tus `Redirect URI`:
   ```
   http://localhost:5173
   https://TU_NOMBRE.vercel.app (si usas Vercel)
   ```

---

## 💚 Créditos

Hecho con cariño y beats por [Tu Nombre]  
Basado en Spotify Web API & React
