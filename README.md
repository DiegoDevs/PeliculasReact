# Proyecto de peliculas

**Una aplicación web moderna para explorar películas populares y buscar por título**, construida con **React + Vite**, la API de **TMDB**, **SCSS**, **Framer Motion** y **modo oscuro persistente**.

**Live Demo:** [peliculas-react-sigma.vercel.app](https://peliculas-react-sigma.vercel.app/)
**Repositorio:** [GitHub - DiegoDevs/PeliculasReact](https://github.com/DiegoDevs/PeliculasReact)
---

## Screenshots

**Modo claro**
![Home Light](public/screenshots/home-light.png)

**Modo Oscuro**
![Home Dark](public/screenshots/home-dark.png)

**Búsqueda**
![Search](public/screenshots/search.png)

---

## Caracteristicas
- **Búsqueda en tiempo real** de películas por título  
- **Paginación infinita** con "Ver más"  
- **Modo oscuro/claro** con persistencia en `localStorage`  
- **Diseño responsive** con efecto **glassmorphism**  
- **Animaciones suaves** con **Framer Motion**  
- **Carga con spinner** y manejo de errores  
- **Optimizado para móviles**  
- **Código limpio, modular y bien comentado**

---

## Tecnologías

| Tecnología        | Uso |
|-------------------|-----|
| React + Vite      | Frontend rápido y moderno |
| TMDB API          | Fuente de datos de películas |
| SCSS              | Estilos avanzados con variables y mixins |
| Framer Motion     | Animaciones fluidas |
| Context API       | Gestión global del tema |
| localStorage      | Persistencia del modo oscuro |
| **Vercel**        | Hosting y CI/CD automático |

## Instalación local

```bash
# 1. Clonar el repositorio
git clone https://github.com/DiegoDevs/PeliculasReact.git

# 2. Entrar en el proyecto
cd PeliculasReact

# 3. Instalar dependencias
npm install

# 4. Crear archivo .env con tu API Key de TMDB
echo "VITE_TMDB_API_KEY=tu_api_key" > .env

# 5. Ejecutar en modo desarrollo
npm run dev
```

## Licencia

MIT License (LICENSE) © 2025 **Diego**

---

## Autor

**Diego**  
diegordriguezt@gamil.com
Frontend Developer | React Enthusiast  
[GitHub: @DiegoDevs](https://github.com/DiegoDevs)
