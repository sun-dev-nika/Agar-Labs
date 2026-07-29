export default function ServiceCard({ number, title, description, bullets, tags }) {
  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-neon hover:bg-neon/[0.04] md:p-10">
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-neon">
          {number} — {title}
        </span>
      </div>

      <h3 className="mt-6 font-display text-3xl font-bold uppercase leading-tight md:text-4xl">
        {title}
      </h3>

      <p className="mt-4 text-base text-muted">{description}</p>

      <ul className="mt-8 space-y-3 border-t border-border pt-6">
        {bullets.map((b) => (
          <li key={b.label} className="flex items-baseline justify-between gap-4">
            <span className="text-white">{b.label}</span>
            <span className="flex items-center gap-2">
              {b.promo && (
                <span className="rounded-full border border-neon/40 bg-neon/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.15em] text-neon">
                  Promo
                </span>
              )}
              <span className="font-mono text-sm text-muted">{b.price}</span>
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-block rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/70"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  )
}
