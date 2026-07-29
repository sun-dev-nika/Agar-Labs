const STATS = [
  { n: '5.266', l: 'Seguidores orgánicos' },
  { n: '273.962', l: 'Visualizaciones / 30 días' },
  { n: '174.052', l: 'Cuentas alcanzadas' },
  { n: 'C2', l: 'Inglés certificado EF SET' },
]

export default function PortfolioHero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 85% 30%, rgba(212,255,0,0.18), transparent 45%), radial-gradient(circle at 15% 80%, rgba(0,212,255,0.12), transparent 45%)',
        }}
      />
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid-portfolio" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-portfolio)" />
      </svg>

      <div className="container-x relative py-20 md:py-28">
        <p className="section-label mb-6">COMMUNITY MANAGER · PUBLICISTA · VALPARAÍSO, CHILE</p>

        <h1 className="max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
          Creo contenido
          <br />
          que <span className="text-neon">convierte.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-muted md:text-xl">
          Comunicador creativo con experiencia comprobable en gestión de redes, contenido
          orgánico y construcción de audiencias. Storytelling, producción audiovisual y
          desarrollo web bajo el mismo techo.
        </p>

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
          {STATS.map((stat, i) => {
            const borderClasses = [
              '', // 0: top-left, no border
              'border-l border-border md:border-l md:border-border', // 1: same row (mobile), col 2 (desktop)
              'border-t border-border md:border-t-0 md:border-l', // 2: new row (mobile), col 3 (desktop)
              'border-t border-l border-border md:border-t-0', // 3: new row (mobile), col 4 (desktop)
            ][i]
            return (
              <div key={stat.l} className={`p-6 md:p-8 ${borderClasses}`}>
                <div className="font-display text-2xl font-bold text-neon md:text-3xl">{stat.n}</div>
                <div className="mt-1 text-xs text-muted">{stat.l}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
