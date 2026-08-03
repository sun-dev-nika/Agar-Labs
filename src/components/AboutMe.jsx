const SKILLS = [
  'INSTAGRAM / TIKTOK / YOUTUBE',
  'CONTENIDO ORGÁNICO',
  'COPYWRITING & STORYTELLING',
  'CAPCUT / VEGAS PRO',
  'CALENDARIOS EDITORIALES',
  'META BUSINESS SUITE',
  'IA GENERATIVA',
  'HIGGSFIELD',
  'HTML / CSS / JS',
  'FOTOGRAFÍA PROFESIONAL',
]

export default function AboutMe() {
  return (
    <section id="sobre-mi" className="section-y">
      <div className="container-x">
        <p className="section-label mb-4">06 — SOBRE MÍ</p>
        <h2 className="mb-10 font-display text-3xl font-bold uppercase leading-tight md:text-5xl">
          Sobre mí
        </h2>

        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <p className="font-display text-2xl font-bold leading-tight md:text-4xl">
            Publicista titulado de la <span className="text-neon">Universidad Andrés Bello</span>,
            con mentalidad de agencia: orientado a resultados y con alto sentido estético.
          </p>

          <div>
            <p className="text-sm text-muted md:text-base">
              Como FullStack Product Engineer, no me limito a recibir instrucciones de código:
              diseño, desarrollo y despliego productos completos —de punta a punta— combinando
              ejecución técnica con visión de negocio y empatía por el cliente. Construí sitios
              institucionales reales (IGV Residuos, AP Ecology, Grupo Verde) y aplicaciones
              propias como Bencina en Ruta, apoyándome en agentes de IA para moverme más rápido
              sin sacrificar calidad.
            </p>
            <p className="mt-4 text-sm text-muted md:text-base">
              Como publicista, combino storytelling y producción audiovisual (CapCut, Vegas Pro)
              con herramientas de IA generativa —Higgsfield y modelos como Seedance, Nano
              Banana, GPT Image, Kling Motion Control y Seedream— para crear contenido que
              convierte. Trabajo bilingüe español–inglés (C2 certificado), con experiencia en
              entornos multiculturales. Mi diferencial: no solo gestiono la comunidad, también
              construyo las piezas —fotos, video, sitios web y apps— que la alimentan. Antes de
              esto, trabajé como fotógrafo para Norwegian Cruise Lines.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <span key={skill} className="chip">
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
