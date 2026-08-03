import HeroBackdrop from './HeroBackdrop.jsx'

const STATS = [
  { n: '5.266', l: 'Seguidores orgánicos' },
  { n: '273.962', l: 'Visualizaciones / 30 días' },
  { n: '174.052', l: 'Cuentas alcanzadas' },
  { n: 'C2', l: 'Inglés certificado EF SET' },
]

// Border per cell for a fixed 2x2 (mobile) / 1x4 (desktop) grid — index-based
// since Tailwind's divide-x/divide-y utilities don't follow 2D grid position.
const STAT_BORDER_CLASSES = [
  '', // 0: top-left, no border
  'border-l border-border md:border-l md:border-border', // 1: same row (mobile), col 2 (desktop)
  'border-t border-border md:border-t-0 md:border-l', // 2: new row (mobile), col 3 (desktop)
  'border-t border-l border-border md:border-t-0', // 3: new row (mobile), col 4 (desktop)
]

export default function PortfolioHero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <HeroBackdrop patternId="grid-portfolio" />

      <div className="container-x relative py-20 md:py-28">
        <p className="section-label mb-6">PUBLICISTA · UX/UI · PRODUCT ENGINEER · VALPARAÍSO, CHILE</p>

        <h1 className="max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
          Creo contenido
          <br />
          que <span className="text-neon">convierte.</span>
        </h1>

        <ul className="mt-8 max-w-2xl space-y-3">
          {[
            'Ingeniería Full Stack',
            'Facilidad de interactuar con clientes',
            'Traducir problemas de negocio a requerimientos técnicos',
            'Enfoque en soluciones, diseñar y desarrollar flujos a la medida',
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-lg text-muted md:text-xl">
              <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-neon" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-2">
          <span className="rounded-full border border-border px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-white/70">
            <strong className="text-white">Bilingüe</strong> · Español nativo / Inglés C2
          </span>
          <span className="rounded-full border border-border px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-white/70">
            <strong className="text-white">+270K</strong> visualizaciones orgánicas / 30 días
          </span>
          <span className="rounded-full border border-border px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-white/70">
            <strong className="text-white">Full stack</strong> asistido por IA
          </span>
        </div>

        <div className="mt-12 grid grid-cols-2 overflow-hidden rounded-2xl border border-border bg-surface md:grid-cols-4">
          {STATS.map((stat, i) => (
            <div key={stat.l} className={`p-6 md:p-8 ${STAT_BORDER_CLASSES[i]}`}>
              <div className="font-display text-2xl font-bold text-neon md:text-3xl">{stat.n}</div>
              <div className="mt-1 text-xs text-muted">{stat.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
