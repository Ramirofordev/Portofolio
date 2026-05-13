# Portafolio RPG

Portafolio personal de Jose Ignacio Ramiro construido con React y Vite. La interfaz esta planteada como un menu RPG inspirado en juegos soulslike, con una direccion visual oscura, paneles de inventario, rarezas, misiones y cronicas de progreso.

## Objetivo

El proyecto presenta perfil profesional, habilidades, certificados, experiencia y proyectos de una forma distinta a un portafolio tradicional. La idea principal es que la navegacion se sienta como una pantalla de personaje:

- Perfil como ficha principal del jugador.
- Inventario con certificados, habilidades y experiencia.
- Misiones para proyectos desplegados.
- Cronicas para resumen profesional.
- Contacto mediante modal integrado con EmailJS.

## Stack

- React
- Vite
- Tailwind CSS
- React Icons
- EmailJS
- GitHub Pages

## Estructura

```text
src/
  App.jsx                 # Estructura principal de la SPA y componentes de UI
  index.css               # Estilos globales, tema visual y responsive
  data/
    certificates.js       # Certificados y rarezas
    experience.js         # Experiencia profesional y formativa
    projects.js           # Proyectos destacados
    skills.js             # Lenguajes, herramientas y niveles
  utils/
    assets.js             # Helper para rutas compatibles con Vite base
public/
  assets/                 # Imagenes, certificados, CV e iconos
```

## Instalacion

```bash
pnpm install
```

Tambien se puede usar npm si se prefiere:

```bash
npm install
```

## Comandos

```bash
pnpm run dev
```

Inicia el entorno de desarrollo.

```bash
pnpm run build
```

Genera la version de produccion en `dist/`.

```bash
pnpm run preview
```

Sirve localmente la build de produccion.

```bash
pnpm run deploy
```

Publica `dist/` en GitHub Pages mediante `gh-pages`.

## Despliegue

El proyecto esta configurado para GitHub Pages con:

```js
base: "/Portofolio/"
```

Las rutas de assets se construyen con `import.meta.env.BASE_URL` para funcionar correctamente tanto en desarrollo como en despliegue.

## Notas de mantenimiento

- Mantener los textos profesionales, breves y revisados ortograficamente.
- Al agregar nuevos certificados, definir su `rarity`: `common`, `rare`, `epic` o `legendary`.
- Al agregar proyectos, incluir demo, repositorio, tecnologias y detalles tecnicos concretos.
- Verificar siempre con `pnpm run build` antes de desplegar.
