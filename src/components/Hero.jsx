import { ArrowRight } from 'lucide-react'

export default function Hero() {
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
          <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

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
