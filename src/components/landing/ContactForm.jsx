import { useState } from 'react'
import { ArrowUpRight, Check } from 'lucide-react'

const initialForm = { name: '', email: '', message: '' }

function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((currentForm) => ({ ...currentForm, [name]: value }))
    if (status) setStatus('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('Please complete all required fields before submitting.')
      return
    }

    setStatus('Thank you. Your message form is ready to be connected.')
  }

  return (
    <div className="contact-fade-up rounded-2xl border border-slate-800 bg-slate-900/70 p-5 sm:p-7">
      <div className="border-b border-slate-800 pb-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-indigo-300">Send a message</p>
        <h3 className="mt-2 text-xl font-semibold tracking-tight text-white">How can we help?</h3>
        <p className="mt-2 text-sm leading-6 text-slate-400">Share a few details and we will have the right context for your question.</p>
      </div>

      <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="contact-name" className="text-sm font-medium text-slate-200">Full Name</label>
          <input id="contact-name" name="name" type="text" value={form.name} onChange={handleChange} required autoComplete="name" className="mt-2 min-h-11 w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 text-sm text-white outline-none transition-colors placeholder:text-slate-600 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20" />
        </div>
        <div>
          <label htmlFor="contact-email" className="text-sm font-medium text-slate-200">Email Address</label>
          <input id="contact-email" name="email" type="email" value={form.email} onChange={handleChange} required autoComplete="email" className="mt-2 min-h-11 w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 text-sm text-white outline-none transition-colors placeholder:text-slate-600 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20" />
        </div>
        <div>
          <label htmlFor="contact-message" className="text-sm font-medium text-slate-200">Message</label>
          <textarea id="contact-message" name="message" value={form.message} onChange={handleChange} required rows="4" className="mt-2 w-full resize-y rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-3 text-sm leading-6 text-white outline-none transition-colors placeholder:text-slate-600 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20" />
        </div>
        <button type="submit" className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-indigo-500 px-4 text-sm font-semibold text-white transition-colors hover:bg-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 sm:w-auto">
          Send Message
          <ArrowUpRight size={16} aria-hidden="true" />
        </button>
        <p className="min-h-6 text-sm leading-6 text-slate-400" role="status" aria-live="polite">
          {status && <><Check size={15} className="mr-1 inline text-indigo-300" aria-hidden="true" />{status}</>}
        </p>
      </form>
    </div>
  )
}

export default ContactForm