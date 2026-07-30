import { services } from './services.js'

const TIME_BY_SERVICE = [
  { label: 'Frontend (UI / Landing)', time: '48h – 2 semanas' },
  { label: 'Backend (API / Base de datos)', time: '2–4 semanas' },
  { label: 'Fullstack (Front + Back)', time: '4–8+ semanas' },
  { label: 'Migración de hosting', time: '1–2 semanas' },
  { label: 'Análisis de Datos', time: '1–2 semanas' },
  { label: 'Automatización de procesos', time: '1–2 semanas' },
]

const allBullets = services.flatMap((service) => service.bullets)

function lowerBound(range) {
  return range.split('–')[0].trim()
}

export const pricing = TIME_BY_SERVICE.map(({ label, time }) => {
  const bullet = allBullets.find((b) => b.label === label)
  return { service: label, from: lowerBound(bullet.price), time, promo: bullet.promo === true }
})
