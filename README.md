# 🎬 CineScope

CineScope es una aplicación web desarrollada con **React** y **Vite** que permite explorar un catálogo de películas de manera sencilla e intuitiva.  
El proyecto consume la API de **The Movie Database (TMDb)** para mostrar información actualizada sobre títulos populares, estrenos y detalles completos de cada película.

## 🚀 Características principales
- **Página de inicio (Home):** listado de películas populares en formato grid.
- **Buscador:** permite encontrar películas por título en tiempo real.
- **Página de detalle:** muestra información completa de cada película (sinopsis, géneros, reparto, puntuación).
- **Rutas dinámicas:** navegación con React Router (`/` para Home, `/movie/:id` para detalle).
- **Loading states:** indicador visual mientras se cargan los datos.
- **Manejo de errores:** mensajes claros cuando no hay resultados o la API falla.

## 🛠️ Tecnologías utilizadas
- **React + Vite** → framework y bundler para desarrollo rápido.
- **React Router** → gestión de rutas y navegación.
- **Axios / Fetch API** → consumo de la API de TMDb.
- **CSS / Tailwind (opcional)** → estilos y diseño responsivo.

## 📂 Estructura del proyecto

src/
├── components/
│    ├── MovieCard.jsx
│    ├── SearchBar.jsx
│    ├── Loader.jsx
│    └── ErrorMessage.jsx
├── pages/
│    ├── Home.jsx
│    ├── MovieDetail.jsx
│    └── NotFound.jsx
├── routes/
│    └── AppRouter.jsx
├── services/
│    └── api.js
├── App.jsx
└── main.jsx


## 🔑 Recursos
- API: [The Movie Database (TMDb)](https://developer.themoviedb.org)
- Requiere **API Key** para las peticiones.

## 🎯 Objetivo
El propósito de este proyecto es practicar y aplicar conceptos fundamentales de React como:
- Componentes reutilizables.
- Hooks (`useState`, `useEffect`).
- Rutas dinámicas con React Router.
- Manejo de estados de carga y error.
- Consumo de APIs externas.

---
✨ *CineScope: tu ventana al universo del cine.*
