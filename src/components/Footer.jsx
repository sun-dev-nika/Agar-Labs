import { Link, useLocation } from 'react-router-dom'
import { Linkedin, Instagram, Mail } from 'lucide-react'
import { EMAIL } from '../lib/contact.js'

const SOCIALS = [
  {
    Icon: Linkedin,
    href: 'https://www.linkedin.com/in/joaquin-agar-arellano-23b78413a/',
    label: 'LinkedIn',
  },
  { Icon: Instagram, href: 'https://instagram.com/joaquinagar.og', label: 'Instagram' },
]

const HOME_LINKS = [
  { hash: '#services', label: 'Servicios' },
  { hash: '#projects', label: 'Proyectos' },
  { hash: '#pricing', label: 'Precios' },
  { hash: '#cta', label: 'Contacto' },
]

const PORTFOLIO_LINKS = [
  { hash: '#trabajo', label: 'Experiencia' },
  { hash: '#web', label: 'Desarrollo web' },
  { hash: '#estrategia', label: 'Estrategia' },
  { hash: '#foto', label: 'Fotografía' },
  { hash: '#sobre-mi', label: 'Sobre mí' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  const { pathname } = useLocation()
  const onPortfolio = pathname === '/portafolio'
  const navLinks = onPortfolio ? PORTFOLIO_LINKS : HOME_LINKS
  const resolveHref = (hash) => (onPortfolio ? `/portafolio${hash}` : hash)
  const crossLink = onPortfolio
    ? { href: '/', label: 'Inicio (Servicios)' }
    : { href: '/portafolio', label: 'Portafolio' }

  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-x py-14 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-cyan to-blue-500 bg-clip-text text-transparent">
                AGAR
              </span>
              <span className="ml-1 text-white/60">/Labs</span>
            </p>
            <p className="mt-4 max-w-xs text-sm text-muted">
              Páginas web, automatizaciones y orden de tus datos con IA.
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-5 inline-flex items-center gap-2 text-sm text-white transition-colors duration-200 hover:text-neon"
            >
              <Mail size={14} strokeWidth={2.5} />
              {EMAIL}
            </a>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-neon">
              Navegación
            </p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.hash}>
                  <a
                    href={resolveHref(link.hash)}
                    className="text-sm text-white/80 transition-colors duration-200 hover:text-cyan"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  to={crossLink.href}
                  className="text-sm text-neon transition-colors duration-200 hover:text-cyan"
                >
                  {crossLink.label}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-neon">
              Sígueme
            </p>
            <div className="mt-5 flex gap-3">
              {SOCIALS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-white transition-all duration-200 hover:border-neon hover:text-neon"
                >
                  <Icon size={16} strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 md:flex-row md:items-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
            © {year} AGAR/Labs. All rights reserved.
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
            Made with React + Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}
