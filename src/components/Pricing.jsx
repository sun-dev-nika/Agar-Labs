import { pricing } from '../data/pricing.js'
import PromoBadge from './PromoBadge.jsx'

export default function Pricing() {
  return (
    <section id="pricing" className="section-y">
      <div className="container-x">
        <p className="section-label mb-6">PRECIOS</p>
        <h2 className="max-w-3xl font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight md:text-6xl">
          Precios
        </h2>

        <div className="mt-14 overflow-hidden rounded-2xl border border-border">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-surface">
                <th className="px-4 py-5 text-left font-mono text-[11px] uppercase tracking-[0.2em] text-muted md:px-8">
                  Servicio
                </th>
                <th className="px-4 py-5 text-left font-mono text-[11px] uppercase tracking-[0.2em] text-muted md:px-8">
                  Desde
                </th>
                <th className="hidden px-4 py-5 text-left font-mono text-[11px] uppercase tracking-[0.2em] text-muted sm:table-cell md:px-8">
                  Tiempo
                </th>
              </tr>
            </thead>
            <tbody>
              {pricing.map((row, i) => (
                <tr
                  key={row.service}
                  className={`group transition-colors duration-200 hover:bg-neon/[0.05] ${
                    i !== pricing.length - 1 ? 'border-b border-border' : ''
                  }`}
                >
                  <td className="px-4 py-5 md:px-8">
                    <p className="font-medium text-white">{row.service}</p>
                    <p className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-muted sm:hidden">
                      {row.time}
                    </p>
                  </td>
                  <td className="px-4 py-5 md:px-8">
                    <div className="flex items-center gap-2">
                      <span className="font-display text-lg font-bold text-neon md:text-xl">
                        {row.from}
                      </span>
                      {row.promo && <PromoBadge />}
                    </div>
                  </td>
                  <td className="hidden px-4 py-5 font-mono text-sm text-muted sm:table-cell md:px-8">
                    {row.time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-sm text-muted">
          Los rangos varían según alcance y complejidad. Cotización gratis y sin compromiso.
        </p>
      </div>
    </section>
  )
}
