import { Resend } from 'resend'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'jiagar@miuandes.cl'
const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'method_not_allowed' })
    return
  }

  const { email, company } = req.body ?? {}

  if (company) {
    res.status(200).json({ ok: true })
    return
  }

  const trimmedEmail = typeof email === 'string' ? email.trim() : ''
  if (!EMAIL_RE.test(trimmedEmail)) {
    res.status(400).json({ ok: false, error: 'invalid_email' })
    return
  }

  const [contactResult, emailResult] = await Promise.allSettled([
    resend.contacts.create({
      audienceId: process.env.RESEND_AUDIENCE_ID,
      email: trimmedEmail,
    }),
    resend.emails.send({
      from: 'jiagar.dev <onboarding@resend.dev>',
      to: CONTACT_TO_EMAIL,
      subject: 'Nuevo contacto - jiagar.dev',
      text: `Nuevo lead desde el formulario de contacto: ${trimmedEmail}`,
    }),
  ])

  if (contactResult.status === 'rejected') {
    console.error('Resend contacts.create failed', contactResult.reason)
  }
  if (emailResult.status === 'rejected') {
    console.error('Resend emails.send failed', emailResult.reason)
  }

  if (contactResult.status === 'rejected' && emailResult.status === 'rejected') {
    res.status(502).json({ ok: false, error: 'send_failed' })
    return
  }

  res.status(200).json({ ok: true })
}
