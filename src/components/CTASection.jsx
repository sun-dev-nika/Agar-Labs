import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { EMAIL, WHATSAPP_URL } from '../lib/contact.js'

export default function CTASection() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const trimmed = email.trim()
    if (!trimmed) return
    const subject = encodeURIComponent('Cotización proyecto AGAR/Labs')
    const body = encodeURIComponent(
      `Hola Joaquín,\n\nMe interesa cotizar un proyecto.\nMi correo: ${trimmed}\n\nCuéntame:`
    )
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="cta" className="relative border-t border-border py-20 md:py-32">
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
        <p className="section-label mb-6">EMPECEMOS</p>

        <h2 className="max-w-4xl font-display text-5xl font-bold uppercase leading-[1.02] tracking-tight md:text-7xl">
          ¿Listo para tu
          <br />
          <span className="text-neon">próximo proyecto?</span>
        </h2>

        <p className="mt-6 max-w-2xl text-lg text-muted md:text-xl">
          Hablemos. Respuesta en menos de 2 horas en horario laboral.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 flex max-w-2xl flex-col gap-3 rounded-full border border-border bg-surface p-2 sm:flex-row sm:items-center"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            className="flex-1 rounded-full bg-transparent px-5 py-3 text-base text-white placeholder:text-muted focus:outline-none"
            aria-label="Tu correo electrónico"
          />
          <button type="submit" className="btn-neon">
            Quiero cotizar
            <ArrowRight size={18} strokeWidth={2.5} />
          </button>
        </form>

        <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">
          Sin spam. Solo contacto directo.
        </p>

        {sent && (
          <p className="mt-4 max-w-2xl text-sm text-muted">
            Se abrió tu cliente de correo. Si no pasó nada,{' '}
            <a
              href={`mailto:${EMAIL}`}
              className="text-neon underline underline-offset-2 hover:text-cyan"
            >
              escríbenos directo a {EMAIL}
            </a>{' '}
            o{' '}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon underline underline-offset-2 hover:text-cyan"
            >
              contáctanos por WhatsApp
            </a>
            .
          </p>
        )}
      </div>
    </section>
  )
}
