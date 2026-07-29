import { useLocation } from 'react-router-dom'

export default function useNavLinks({
  homeLinks,
  portfolioLinks,
  crossLinkToHome,
  crossLinkToPortfolio,
}) {
  const { pathname } = useLocation()
  const onPortfolio = pathname === '/portafolio'

  return {
    onPortfolio,
    navLinks: onPortfolio ? portfolioLinks : homeLinks,
    resolveHref: (hash) => (onPortfolio ? `/portafolio${hash}` : hash),
    crossLink: onPortfolio ? crossLinkToHome : crossLinkToPortfolio,
  }
}
