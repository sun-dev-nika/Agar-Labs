import PortfolioLinkCard from './PortfolioLinkCard.jsx'
import { webProjects } from '../data/webProjects.js'

export default function WebProjects() {
  return (
    <section id="web" className="section-y">
      <div className="container-x">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="section-label mb-4">03 — DESARROLLO WEB</p>
            <h2 className="font-display text-3xl font-bold uppercase leading-tight md:text-5xl">
              Sitios para clientes
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted">
            Desarrollo full stack asistido por IA. Frontend, contenido y despliegue.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {webProjects.map((project) => (
            <PortfolioLinkCard key={project.id} {...project}>
              {project.id === 'ap-ecology' && (
                <span className="font-display text-4xl tracking-tight" style={{ color: '#8bbf3f' }}>
                  AP<span style={{ color: '#c9d94a' }}>ecology</span>
                </span>
              )}
              {project.id === 'pdf-on-rails' && (
                <span className="font-display text-4xl tracking-tight text-white">
                  <span style={{ color: '#cc0000' }}>PDF</span> on Rails
                </span>
              )}
            </PortfolioLinkCard>
          ))}
        </div>
      </div>
    </section>
  )
}
