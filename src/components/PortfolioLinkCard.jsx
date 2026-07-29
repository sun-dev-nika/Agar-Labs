import { ArrowUpRight } from 'lucide-react'

export default function PortfolioLinkCard({
  tag,
  tagVariant = 'default',
  title,
  description,
  footNote,
  footLabel,
  href,
  external = false,
  layout = 'vertical',
  image,
  children,
}) {
  const Tag = href ? 'a' : 'div'
  const linkProps = href
    ? { href, ...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {}) }
    : {}

  const media = (
    <div
      className={`relative overflow-hidden bg-surface ${
        layout === 'wide' ? 'h-full min-h-[220px]' : 'h-40'
      }`}
    >
      {image ? (
        <>
          <img
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-bg/35 mix-blend-multiply" />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-bg/20"
          />
        </>
      ) : (
        <div
          className="flex h-full w-full items-center justify-center"
          style={{
            background:
              'linear-gradient(135deg, rgba(212,255,0,0.12), rgba(0,212,255,0.08) 60%, rgba(20,20,20,1))',
          }}
        >
          {children}
        </div>
      )}
      {tag && (
        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] ${
            tagVariant === 'accent'
              ? 'bg-neon text-bg'
              : 'border border-border bg-bg/80 text-white/80 backdrop-blur-sm'
          }`}
        >
          {tag}
        </span>
      )}
    </div>
  )

  return (
    <Tag
      {...linkProps}
      className={`card group relative flex h-full overflow-hidden ${
        href ? 'hover:-translate-y-1 hover:border-neon hover:bg-neon/[0.04]' : ''
      } ${layout === 'wide' ? 'flex-col md:flex-row' : 'flex-col'}`}
    >
      <div className={layout === 'wide' ? 'md:w-1/2' : ''}>{media}</div>

      <div className={`flex flex-1 flex-col p-6 md:p-8 ${layout === 'wide' ? 'justify-center' : ''}`}>
        <h3 className="font-display text-xl font-bold uppercase leading-tight md:text-2xl">
          {title}
        </h3>
        <p className="mt-3 text-sm text-muted">{description}</p>

        {footLabel && (
          <div
            className={`mt-6 flex items-center gap-2 self-start font-mono text-xs uppercase tracking-[0.2em] transition-colors duration-200 ${
              href ? 'text-white group-hover:text-neon' : 'text-muted'
            }`}
          >
            {footLabel}
            {href && <ArrowUpRight size={14} strokeWidth={2.5} />}
          </div>
        )}
        {footNote && <p className="mt-2 text-xs italic text-muted">{footNote}</p>}
      </div>
    </Tag>
  )
}
