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
```
src/

  ├── components/          # Componentes reutilizables de la interfaz
  │   ├── MovieCard.jsx    # Tarjeta individual de película
  │   ├── SearchBar.jsx    # Barra de búsqueda
  │   ├── Loader.jsx       # Componente de loading (spinner/esqueleto)
  │   └── ErrorMessage.jsx # Visualización de estados de error

  ├── pages/               # Vistas principales (vistas de ruta)
  │   ├── Home.jsx         # Página principal con el listado de películas
  │   ├── MovieDetail.jsx  # Información detallada de una película específica
  │   └── NotFound.jsx     # Vista para rutas no encontradas (404)

  ├── routes/              # Configuración de navegación
  │   └── AppRouter.jsx    # Definición de rutas y switch principal

  ├── services/            # Lógica de comunicación externa
  │   └── api.js           # Funciones para llamadas a la API (fetch/axios)

  ├── App.jsx              # Componente raíz de la aplicación
  └── main.jsx             # Punto de entrada al DOM de React
```

## 📖 Descripción de carpetas y archivos

### 🔹 `components/`
Contiene componentes reutilizables:
- **MovieCard.jsx** → Renderiza la tarjeta de cada película (imagen, título, año).  
- **SearchBar.jsx** → Barra de búsqueda para encontrar películas.  
- **Loader.jsx** → Indicador visual de carga.  
- **ErrorMessage.jsx** → Muestra mensajes de error cuando la API falla o no hay resultados.  

### 🔹 `pages/`
Define las páginas principales de la aplicación:
- **Home.jsx** → Página inicial con listado de películas.  
- **MovieDetail.jsx** → Página de detalle con información completa de una película.  
- **NotFound.jsx** → Página 404 para rutas inexistentes.  

### 🔹 `routes/`
- **AppRouter.jsx** → Configuración de rutas con React Router.  

### 🔹 `services/`
- **api.js** → Funciones para consumir la API de TMDb.  

### 🔹 Archivos raíz
- **App.jsx** → Componente principal que organiza la aplicación.  
- **main.jsx** → Punto de entrada que renderiza la app en el DOM.  

---


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
