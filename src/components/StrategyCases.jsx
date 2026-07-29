import PortfolioLinkCard from './PortfolioLinkCard.jsx'
import { strategyCases } from '../data/strategyCases.js'

export default function StrategyCases() {
  return (
    <section id="estrategia" className="border-t border-border py-20 md:py-28">
      <div className="container-x">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="section-label mb-4">04 — ESTRATEGIA</p>
            <h2 className="font-display text-3xl font-bold uppercase leading-tight md:text-5xl">
              Estrategia y planificación
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted">
            Análisis de marca, buyer personas y conceptos de campaña. Toca para abrir cada caso.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {strategyCases.map((item) => (
            <PortfolioLinkCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
