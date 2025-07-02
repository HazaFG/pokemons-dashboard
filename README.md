# 🚀 Pokémon Dashboard

¡Bienvenido al **Pokémon Dashboard**! Este proyecto es una aplicación web interactiva que te permite explorar Pokémon utilizando la **PokeAPI**, implementando técnicas avanzadas de **Next.js** y **gestión de estado** para una experiencia de usuario fluida y eficiente.

---

## Características Principales

- **Exploración de Pokémon**  
  Navega por una extensa colección de Pokémon, con detalles individuales para cada uno.

- **Generación Dinámica (SSR)**  
  Contenido renderizado en el servidor para páginas individuales de Pokémon, asegurando que siempre obtengas la información más reciente.

- **Generación Estática (SSG) e Incremental Static Regeneration (ISR)**  
  Las páginas principales y de listado se pre-renderizan en tiempo de construcción y se revalidan periódicamente para mantener el contenido fresco sin reconstruir todo el sitio.

- **Gestión de Estado Global (Redux Toolkit)**  
  Utilización de Redux Toolkit para una gestión de estado robusta y predecible a lo largo de toda la aplicación.

- **Sección de Favoritos**  
  Guarda tus Pokémon favoritos de forma persistente.

- **Persistencia de Favoritos (LocalStorage)**  
  Tus Pokémon favoritos se guardan automáticamente en el almacenamiento local de tu navegador, para que no los pierdas incluso si cierras la aplicación.

- **Manejo de estado global y local**  
  Una combinación eficaz para una experiencia de usuario óptima.

---

## 🛠️ Tecnologías Utilizadas

- **Next.js**: Framework de React para aplicaciones web con SSR, SSG e ISR.  
- **React**: Biblioteca de JavaScript para construir interfaces de usuario.  
- **Redux Toolkit**: La forma recomendada de usar Redux, simplificando la configuración y escritura de lógica Redux.  
- **PokeAPI**: La API RESTful de Pokémon de la que se obtiene toda la información de los Pokémon.  
- **Tailwind CSS** (o tu framework CSS/librería de estilos): Para un estilizado rápido y responsivo. *(Ajusta esto si usas otro CSS)*  
- **TypeScript**: Para un código más robusto y con menos errores.  
- **LocalStorage**: Para la persistencia de datos del usuario (Pokémon favoritos).

---

## 💡 Cómo Funciona

Este dashboard aprovecha **Next.js** para optimizar el rendimiento y la experiencia del desarrollador:

### SSR (Server-Side Rendering)

Las páginas de detalle de cada Pokémon (`/pokemon/[id]`) se renderizan en el servidor en cada solicitud, garantizando que el usuario siempre vea la información más actualizada directamente desde la **PokeAPI**.

### SSG (Static Site Generation) con ISR (Incremental Static Regeneration)

- Las páginas de listado de Pokémon se generan estáticamente en tiempo de construcción.  
- Con **ISR**, estas páginas pueden ser revalidadas y actualizadas en segundo plano (por ejemplo, cada 60 segundos) sin necesidad de un nuevo despliegue completo.  
Esto permite que el contenido se mantenga fresco si la **PokeAPI** se actualiza o si añades más Pokémon a tu base de datos interna *(aunque en este caso es solo la PokeAPI)*.

### Redux Toolkit

Se utiliza para manejar el estado global de la aplicación, como la lista de Pokémon favoritos.  
Un **middleware personalizado de Redux** se encarga de sincronizar los favoritos con `localStorage`, asegurando su persistencia.

### LocalStorage

Un middleware de Redux escucha las acciones relacionadas con los favoritos y guarda el estado actualizado en el `localStorage` del navegador, haciendo que los favoritos **persistan entre sesiones**.

---

## 🚀 Cómo Empezar

Sigue estos pasos para poner en marcha el proyecto en tu máquina local:

### 1. Clona el repositorio

```bash
git clone [URL_DE_TU_REPOSITORIO]
cd pokemon-dashboard
```

### 2. Instala las dependencias

```bash
npm install
# o
yarn install
```

### 3. Ejecuta el servidor de desarrollo

```bash
npm run dev
# o
yarn dev
```

### 4. Abre tu navegador

Visita `http://localhost:3000` para ver la aplicación en funcionamiento.

---

---

## 📦 Arquitectura General

Este proyecto está desarrollado con **Next.js**, lo que permite utilizar renderizado del lado del servidor (SSR), generación de sitios estáticos (SSG) y regeneración estática incremental (ISR).

Además, incluye una **mini RESTful API de testing** implementada con las funciones API de Next.js (`/api*`).  

---
