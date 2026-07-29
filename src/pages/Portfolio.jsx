import useDocumentTitle from '../hooks/useDocumentTitle.js'
import PortfolioHero from '../components/PortfolioHero.jsx'
import Experience from '../components/Experience.jsx'
import PersonalBrand from '../components/PersonalBrand.jsx'
import WebProjects from '../components/WebProjects.jsx'
import StrategyCases from '../components/StrategyCases.jsx'
import PortfolioLinkCard from '../components/PortfolioLinkCard.jsx'
import AboutMe from '../components/AboutMe.jsx'
import PortfolioCTA from '../components/PortfolioCTA.jsx'

export default function Portfolio() {
  useDocumentTitle(
    'Joaquín Agar — Community Manager & Comunicador Creativo',
    'Portafolio de Joaquín Agar: community management, contenido orgánico, desarrollo web y fotografía. Publicista UNAB / U. de los Andes, Valparaíso.',
    '/portafolio'
  )

  return (
    <>
      <PortfolioHero />
      <Experience />
      <PersonalBrand />
      <WebProjects />
      <StrategyCases />

      <section id="foto" className="section-y">
        <div className="container-x">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="section-label mb-4">05 — FOTOGRAFÍA</p>
              <h2 className="font-display text-3xl font-bold uppercase leading-tight md:text-5xl">
                Book fotográfico
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted">
              Retrato, eventos y producción documental. Toca para ver el book completo.
            </p>
          </div>

          <PortfolioLinkCard
            tag="PDF · 2024"
            title="Portfolio de fotografía"
            description="Retratos, eventos y producción documental con postproducción propia. Sesiones para músicos, eventos familiares y trabajo editorial."
            image={{
              src: '/portfolio/foto_a.jpg',
              alt: 'Muestra de portada del book fotográfico',
              width: 2400,
              height: 1350,
            }}
            href="/portfolio/book_fotografico.pdf"
            external
            footLabel="Abrir book completo (PDF)"
            layout="wide"
          />
        </div>
      </section>

      <AboutMe />
      <PortfolioCTA />
    </>
  )
}
