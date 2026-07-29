import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from '../lib/contact.js'

const HOME_LINKS = [
  { hash: '#services', label: 'Servicios' },
  { hash: '#pricing', label: 'Precios' },
  { hash: '#cta', label: 'Cotización' },
]

const PORTFOLIO_LINKS = [
  { hash: '#trabajo', label: 'Community Manager' },
  { hash: '#web', label: 'Desarrollo web' },
  { hash: '#estrategia', label: 'Estrategia' },
  { hash: '#foto', label: 'Fotografía' },
  { hash: '#sobre-mi', label: 'Sobre mí' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const onPortfolio = pathname === '/portafolio'
  const navLinks = onPortfolio ? PORTFOLIO_LINKS : HOME_LINKS
  const resolveHref = (hash) => (onPortfolio ? `/portafolio${hash}` : hash)
  const crossLink = onPortfolio
    ? { href: '/', label: 'Inicio' }
    : { href: '/portafolio', label: 'Portafolio' }

  const Logo = (
    <span className="font-display text-2xl font-bold tracking-tight">
      <span className="bg-gradient-to-r from-cyan to-blue-500 bg-clip-text text-transparent">
        AGAR
      </span>
      <span className="ml-1 text-white/60">/Labs</span>
    </span>
  )

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        {onPortfolio ? (
          <Link to="/" className="flex items-center gap-2">
            {Logo}
          </Link>
        ) : (
          <a href="#top" className="flex items-center gap-2">
            {Logo}
          </a>
        )}

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.hash}
              href={resolveHref(link.hash)}
              className="font-mono text-xs uppercase tracking-[0.2em] text-white/80 transition-colors duration-200 hover:text-cyan"
            >
              {link.label}
            </a>
          ))}
          <Link
            to={crossLink.href}
            className="font-mono text-xs uppercase tracking-[0.2em] text-neon transition-colors duration-200 hover:text-cyan"
          >
            {crossLink.label}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full border border-neon/40 bg-neon/5 px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-neon transition-all duration-200 hover:bg-neon/10 hover:shadow-[0_0_20px_rgba(212,255,0,0.25)] sm:inline-flex"
          >
            <MessageCircle size={14} strokeWidth={2.5} />
            WhatsApp
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-white transition-colors duration-200 hover:border-neon hover:text-neon md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-bg md:hidden">
          <div className="container-x flex flex-col py-4">
            {navLinks.map((link) => (
              <a
                key={link.hash}
                href={resolveHref(link.hash)}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 font-mono text-xs uppercase tracking-[0.2em] text-white/80 transition-colors duration-200 hover:text-cyan"
              >
                {link.label}
              </a>
            ))}
            <Link
              to={crossLink.href}
              onClick={() => setOpen(false)}
              className="border-b border-border py-3 font-mono text-xs uppercase tracking-[0.2em] text-neon transition-colors duration-200 hover:text-cyan"
            >
              {crossLink.label}
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-neon/40 bg-neon/5 py-3 font-mono text-xs uppercase tracking-[0.2em] text-neon"
            >
              <MessageCircle size={14} strokeWidth={2.5} />
              Contacta en WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
