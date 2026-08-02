export const webProjects = [
  {
    id: 'igv-residuos',
    tag: 'Cliente real',
    tagVariant: 'accent',
    title: 'IGV Residuos',
    description:
      'Sitio institucional para empresa de gestión de residuos, construido en HTML, CSS y JavaScript. El contenido de puntos limpios y aliados lo edita el cliente en Google Sheets, publicado como CSV y consumido en vivo, con respaldo local si falla la conexión.',
    image: {
      src: '/portfolio/web_igv.jpg',
      alt: 'Vista previa del sitio IGV Residuos',
      width: 2560,
      height: 1706,
    },
    href: 'https://igv-residuos.vercel.app',
    external: true,
    footLabel: 'Ver sitio en vivo',
  },
  {
    id: 'ap-ecology',
    tag: 'Cliente real',
    tagVariant: 'accent',
    title: 'AP Ecology',
    description:
      'Rediseño y desarrollo del sitio institucional durante mi rol de comunicaciones: frontend en HTML/CSS/JS, backend PHP + MySQL y migración de hosting.',
    image: null,
    href: 'https://apecology.com',
    external: true,
    footLabel: 'Ver sitio en vivo',
  },
  {
    id: 'grupo-verde',
    tag: 'Cliente real',
    tagVariant: 'accent',
    title: 'Grupo Verde',
    description:
      'Sitio institucional para empresa de soluciones sostenibles en manejo de residuos, diseño y construcción de espacios ecoamigables. Frontend estático en HTML, CSS y JavaScript, sin build ni dependencias.',
    image: {
      src: '/portfolio/web_grupoverde.png',
      alt: 'Vista previa del sitio Grupo Verde Chile',
      width: 1400,
      height: 720,
    },
    href: 'https://www.grupoverdechile.cl',
    external: true,
    footLabel: 'Ver sitio en vivo',
  },
  {
    id: 'bencina-ruta',
    tag: 'App',
    title: 'Bencina en Ruta',
    description:
      'App propia (Vite + Leaflet, sin backend) que calcula dónde cargar combustible más barato a lo largo de una ruta A→B en Chile, usando los precios abiertos de la CNE y ruteo con OSRM.',
    image: {
      src: '/portfolio/web_bencina.jpg',
      alt: 'Vista previa de la app Bencina en Ruta',
      width: 1280,
      height: 800,
    },
    href: 'https://bencina-ruta.vercel.app',
    external: true,
    footLabel: 'Abrir app',
  },
  {
    id: 'pdf-on-rails',
    tag: 'App',
    title: 'Pdf On Rails',
    description:
      'Toolkit de PDF sin registro (unir, dividir, rotar, comprimir, convertir, OCR y más) construido en Ruby on Rails 8.1 + Hotwire, con PostgreSQL y jobs asíncronos en Solid Queue. Self-hosted con Docker + Kamal.',
    image: null,
    href: 'https://github.com/sun-dev-nika/pdf-on-rails',
    external: true,
    footLabel: 'Ver código en GitHub',
    footNote:
      'Self-hosted vía Docker + Kamal, expuesto por Cloudflare Tunnel — sin dominio fijo, por eso el link va al código.',
  },
  {
    id: 'mindkuapp',
    tag: 'App',
    title: 'Mindkuapp',
    description:
      'App de notas full stack: crear, buscar y compartir notas con link directo. Backend en Node.js + Express + TypeScript con MySQL sin ORM (SQL explícito), frontend en React + TypeScript + Vite. Construida con mi harness de 3 agentes de IA (leader, implementer, reviewer).',
    image: null,
    href: 'https://mindkuapp.vercel.app',
    external: true,
    footLabel: 'Abrir app',
  },
]
