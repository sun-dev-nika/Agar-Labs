import PromoBadge from './PromoBadge.jsx'

export default function ServiceCard({ number, title, description, bullets, tags }) {
  return (
    <article className="card group relative flex h-full flex-col p-8 hover:-translate-y-1 hover:border-neon hover:bg-neon/[0.04] md:p-10">
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-neon">
          {number} — {title}
        </span>
      </div>

      <h3 className="mt-6 break-words font-display text-2xl font-bold uppercase leading-tight md:text-3xl xl:text-4xl">
        {title}
      </h3>

      <p className="mt-4 text-base text-muted">{description}</p>

      <ul className="mt-8 space-y-3 border-t border-border pt-6">
        {bullets.map((b) => (
          <li key={b.label} className="flex items-baseline justify-between gap-4">
            <span className="text-white">{b.label}</span>
            <span className="flex items-center gap-2">
              {b.promo && <PromoBadge />}
              <span className="font-mono text-sm text-muted">{b.price}</span>
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="chip">
            {tag}
          </span>
        ))}
      </div>
    </article>
  )
}
