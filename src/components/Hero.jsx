import { ArrowRight } from 'lucide-react'
import HeroBackdrop from './HeroBackdrop.jsx'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <HeroBackdrop patternId="grid" />

      <div className="container-x relative flex min-h-[80vh] flex-col justify-center py-20 md:py-28">
        <p className="section-label mb-6">VISUALS · CÓDIGO · IA</p>

        <h1 className="max-w-5xl font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
          Desarrollo Web
          <br />
          Fullstack <span className="text-neon">+ IA</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-muted md:text-xl">
          Páginas web (frontend, backend o fullstack) y análisis de datos con IA.
          Respuesta en menos de 2 horas.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a href="#services" className="btn-neon">
            Ver servicios
            <ArrowRight size={18} strokeWidth={2.5} />
          </a>
          <a href="#cta" className="btn-outline">
            Cotizar proyecto
          </a>
        </div>
      </div>
    </section>
  )
}
