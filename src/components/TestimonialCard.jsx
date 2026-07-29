import { Star } from 'lucide-react'

export default function TestimonialCard({ quote, name, role, initial }) {
  return (
    <article className="card flex h-full flex-col p-8 hover:border-neon/40 hover:bg-neon/[0.03]">
      <div className="flex gap-1 text-neon">
        {[0, 1, 2, 3, 4].map((i) => (
          <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
        ))}
      </div>

      <p className="mt-5 flex-1 text-base leading-relaxed text-white/90">"{quote}"</p>

      <div className="mt-8 flex items-center gap-4 border-t border-border pt-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-neon/40 bg-neon/10 font-display text-lg font-bold text-neon">
          {initial}
        </div>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted">{role}</p>
        </div>
      </div>
    </article>
  )
}
