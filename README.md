# jiagar.dev

Portafolio de Joaquín Agar — comunicador creativo, community manager y desarrollador web. Sitio construido con React + Vite, con un formulario de contacto respaldado por un backend serverless.

## Estructura

```
index.html              Punto de entrada de Vite
src/
  App.jsx               Router de la app
  main.jsx              Montaje de React
  index.css             Estilos globales (Tailwind)
  pages/                Home.jsx (landing de servicios) y Portfolio.jsx (portafolio de CM)
  components/           Secciones y componentes reutilizables (cards, hero, header, footer, etc.)
  data/                 Contenido estático: servicios, precios, experiencia, testimonios, proyectos
  hooks/                Hooks propios (título de documento, resolución de navegación)
  lib/                  Constantes compartidas (email, WhatsApp)
api/
  contact.js            Función serverless (Vercel) del formulario de contacto: valida el email,
                         filtra bots con honeypot y usa Resend para guardar el lead y notificar
public/                 Assets estáticos (favicon, imágenes, PDFs del portafolio)
```

## Stack

- React 18 + Vite + Tailwind CSS
- Backend: Vercel Functions (`api/contact.js`) + [Resend](https://resend.com) (email + audiencia de contactos)
- Deploy: Vercel

## Previsualizar localmente

```
npm install
npm run dev
```

Para que el formulario de contacto funcione en local, copia `.env.example` a `.env` y completa las variables:

```
RESEND_API_KEY=
RESEND_AUDIENCE_ID=
CONTACT_TO_EMAIL=
```

## Notas

- El formulario de contacto cae automáticamente a `mailto:` si el backend falla, así nunca queda inutilizable.
- Contacto: [jiagar@miuandes.cl](mailto:jiagar@miuandes.cl)
