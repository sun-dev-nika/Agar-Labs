const BRAND_STATS = [
  { n: '9.923', l: 'Interacciones / 30 días' },
  { n: '87,6%', l: 'Interacción vía Reels' },
  { n: '+7.354%', l: 'Crecimiento de alcance' },
]

export default function PersonalBrand() {
  return (
    <section id="marca" className="border-t border-border py-20 md:py-28">
      <div className="container-x">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="section-label mb-4">02 — MARCA PERSONAL</p>
            <h2 className="font-display text-3xl font-bold uppercase leading-tight md:text-5xl">
              El Rey del Norte
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted">
            Mi propia cuenta como laboratorio: contenido, audiencia y monetización.
          </p>
        </div>

        <div className="grid items-center gap-8 rounded-2xl border border-border bg-surface p-6 md:grid-cols-2 md:p-10">
          <div>
            <h3 className="font-display text-2xl font-bold leading-tight md:text-3xl">
              Una audiencia construida
              <br />
              desde cero.
            </h3>
            <p className="mt-4 text-sm text-muted md:text-base">
              Gestión integral de <strong className="text-white">@joaquinagar.og</strong> como
              creador digital. Contenido en formato reel con un alcance donde el 90% proviene de
              no seguidores — señal de contenido con tracción real, no audiencia cautiva. Entre
              2023 y 2024 moneticé la cuenta ofreciendo servicios de educación financiera.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {BRAND_STATS.map((stat) => (
                <div key={stat.l} className="rounded-xl border border-border bg-bg p-4">
                  <div className="font-display text-lg font-bold text-neon">{stat.n}</div>
                  <div className="mt-1 text-[11px] text-muted">{stat.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <img
              src="/portfolio/ig_perfil.jpg"
              alt="Perfil de Instagram El Rey del Norte con 5.266 seguidores y 274 mil visualizaciones"
              width={1170}
              height={815}
              loading="lazy"
              className="col-span-2 rounded-xl border border-border"
            />
            <img
              src="/portfolio/ig_visualizaciones.jpg"
              alt="Panel de visualizaciones: 273.962 en los últimos 30 días"
              width={1170}
              height={1775}
              loading="lazy"
              className="rounded-xl border border-border"
            />
            <img
              src="/portfolio/ig_interacciones.jpg"
              alt="Panel de interacciones: 9.923 en los últimos 30 días"
              width={1170}
              height={2257}
              loading="lazy"
              className="rounded-xl border border-border"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
