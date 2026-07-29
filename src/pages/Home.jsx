import useDocumentTitle from '../hooks/useDocumentTitle.js'
import Hero from '../components/Hero.jsx'
import Services from '../components/Services.jsx'
import Projects from '../components/Projects.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Pricing from '../components/Pricing.jsx'
import CTASection from '../components/CTASection.jsx'

export default function Home() {
  useDocumentTitle(
    'AGAR/Labs — Desarrollo Web Fullstack + IA',
    'Desarrollador full stack y consultor IA. Landing pages en 48h, automatizaciones y orden de tus datos con IA. Respuesta en menos de 2 horas.',
    '/'
  )

  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <Testimonials />
      <Pricing />
      <CTASection />
    </>
  )
}
