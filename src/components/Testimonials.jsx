import TestimonialCard from './TestimonialCard.jsx'
import { testimonials } from '../data/testimonials.js'

export default function Testimonials() {
  return (
    <section id="testimonials" className="border-t border-border py-20 md:py-28">
      <div className="container-x">
        <p className="section-label mb-6">TESTIMONIOS</p>
        <h2 className="max-w-3xl font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight md:text-5xl">
          Lo que dicen quienes
          <br />
          trabajaron conmigo
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  )
}
