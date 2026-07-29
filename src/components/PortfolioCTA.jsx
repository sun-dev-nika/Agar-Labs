import { Mail, MessageCircle } from 'lucide-react'
import { EMAIL, WHATSAPP_URL } from '../lib/contact.js'

export default function PortfolioCTA() {
  return (
    <section id="contacto" className="relative border-t border-border py-20 md:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 80% 50%, rgba(212,255,0,0.15), transparent 50%)',
        }}
      />

      <div className="container-x relative">
        <h2 className="max-w-4xl font-display text-5xl font-bold uppercase leading-[1.02] tracking-tight md:text-7xl">
          Trabajemos
          <br />
          <span className="text-neon">juntos.</span>
        </h2>

        <p className="mt-6 max-w-2xl text-lg text-muted md:text-xl">
          ¿Buscas quien gestione tu comunidad, produzca tu contenido y entienda tu marca?
          Hablemos.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a href={`mailto:${EMAIL}`} className="btn-neon">
            <Mail size={18} strokeWidth={2.5} />
            {EMAIL}
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">
            <MessageCircle size={18} strokeWidth={2.5} />
            WhatsApp +56 9 7897 1706
          </a>
        </div>
      </div>
    </section>
  )
}
