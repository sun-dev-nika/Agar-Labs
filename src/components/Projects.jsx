import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Projects() {
  return (
    <section id="projects" className="section-y">
      <div className="container-x">
        <p className="section-label mb-6">PROYECTOS</p>
        <h2 className="max-w-3xl font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight md:text-6xl">
          Trabajos
          <br />
          realizados
        </h2>

        <div className="mt-14 flex flex-col items-start gap-6 rounded-2xl border border-border bg-surface p-8 md:flex-row md:items-center md:justify-between md:p-12">
          <p className="max-w-xl text-base text-muted md:text-lg">
            Sitios en producción para clientes reales, casos de estrategia y más — todo
            documentado en mi portafolio.
          </p>
          <Link to="/portafolio" className="btn-neon shrink-0">
            Ver portafolio completo
            <ArrowRight size={18} strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </section>
  )
}
