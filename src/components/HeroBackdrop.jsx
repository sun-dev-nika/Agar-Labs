const GLOW_STYLE = {
  backgroundImage:
    'radial-gradient(circle at 85% 30%, rgba(212,255,0,0.18), transparent 45%), radial-gradient(circle at 15% 80%, rgba(0,212,255,0.12), transparent 45%)',
}

export default function HeroBackdrop({ patternId }) {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={GLOW_STYLE}
      />
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id={patternId} width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </>
  )
}
