import { useEffect } from 'react'

function setMeta(selector, content) {
  const el = document.querySelector(selector)
  if (el) el.setAttribute('content', content)
}

export default function useDocumentTitle(title, description, path = '/') {
  useEffect(() => {
    document.title = title
    if (description) {
      setMeta('meta[name="description"]', description)
      setMeta('meta[property="og:title"]', title)
      setMeta('meta[property="og:description"]', description)
      setMeta('meta[property="og:url"]', `https://agarlabs.vercel.app${path}`)
      setMeta('meta[name="twitter:title"]', title)
      setMeta('meta[name="twitter:description"]', description)
    }
  }, [title, description, path])
}
