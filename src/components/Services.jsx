import ServiceCard from './ServiceCard.jsx'
import { services } from '../data/services.js'

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container-x">
        <p className="section-label mb-6">QUÉ HAGO</p>
        <h2 className="max-w-3xl font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight md:text-6xl">
          Tres servicios,
          <br />
          decisiones claras
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((s) => (
            <ServiceCard key={s.number} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
