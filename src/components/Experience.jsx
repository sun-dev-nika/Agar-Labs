import { experience } from '../data/experience.js'

export default function Experience() {
  return (
    <section id="trabajo" className="section-y">
      <div className="container-x">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="section-label mb-4">01 — EXPERIENCIA</p>
            <h2 className="font-display text-3xl font-bold uppercase leading-tight md:text-5xl">
              Community management
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted">
            Gestión de redes, contenido y comunidades en marcas y proyectos reales.
          </p>
        </div>

        <div className="grid gap-4">
          {experience.map((job) => (
            <div
              key={job.org}
              className="grid gap-6 rounded-2xl border border-border bg-surface p-6 md:grid-cols-[220px_1fr] md:p-8"
            >
              <div>
                <p className="font-display text-lg font-bold leading-tight">{job.role}</p>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-neon">
                  {job.org}
                </p>
                <p className="mt-2 text-xs text-muted">{job.when}</p>
              </div>
              <ul className="space-y-3">
                {job.achievements.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-neon" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
