const GLOW_STYLE = {
  backgroundImage: 'radial-gradient(circle at 80% 50%, rgba(212,255,0,0.15), transparent 50%)',
}

export default function CTABackdrop() {
  return (
    <>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
        style={GLOW_STYLE}
      />
    </>
  )
}
