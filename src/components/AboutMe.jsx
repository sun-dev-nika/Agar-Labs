const SKILLS = [
  'INSTAGRAM / TIKTOK / YOUTUBE',
  'CONTENIDO ORGÁNICO',
  'COPYWRITING & STORYTELLING',
  'CAPCUT / VEGAS PRO',
  'CALENDARIOS EDITORIALES',
  'META BUSINESS SUITE',
  'IA GENERATIVA',
  'HTML / CSS / JS',
  'FOTOGRAFÍA PROFESIONAL',
]

export default function AboutMe() {
  return (
    <section id="sobre-mi" className="border-t border-border py-20 md:py-28">
      <div className="container-x">
        <p className="section-label mb-4">06 — SOBRE MÍ</p>
        <h2 className="mb-10 font-display text-3xl font-bold uppercase leading-tight md:text-5xl">
          Sobre mí
        </h2>

        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <p className="font-display text-2xl font-bold leading-tight md:text-4xl">
            Publicista formado en <span className="text-neon">UNAB</span> y la{' '}
            <span className="text-neon">U. de los Andes</span>, con mentalidad de agencia:
            orientado a resultados y con alto sentido estético.
          </p>

          <div>
            <p className="text-sm text-muted md:text-base">
              Combino storytelling y producción audiovisual (CapCut, Vegas Pro) con herramientas
              de IA generativa para crear contenido que convierte. Trabajo bilingüe
              español–inglés (C2 certificado), acostumbrado a la presión y a los entornos
              multiculturales.
            </p>
            <p className="mt-4 text-sm text-muted md:text-base">
              Mi diferencial: no solo gestiono la comunidad, también construyo las piezas —fotos,
              video, sitios web— que la alimentan.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="inline-block rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/70"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
