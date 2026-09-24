import { Clock, Mail, MessageCircle, Phone } from 'lucide-react'
import ContactForm from './ContactForm'
import contactDetails from './contactData'

function ContactSection() {
  const contactCards = [
    { ...contactDetails.email, icon: Mail, action: 'Send Email' },
    { ...contactDetails.phone, icon: Phone, action: 'Contact Us' },
    { ...contactDetails.support, icon: Clock },
  ]

  return (
    <section id="contact" className="scroll-mt-24 border-b border-slate-800 bg-slate-900/70 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-20 lg:px-10 lg:py-20">
        <div className="max-w-xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo-300">Get In Touch</p>
          <h2 className="mt-4 max-w-lg text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">Let’s connect and move forward.</h2>
          <p className="mt-5 text-base leading-7 text-slate-400">Have a question about our programs, application process, or learning experience? Reach out to the Nova Rise team and we’ll help you with the next step.</p>

          <div className="mt-9 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {contactCards.map(({ icon: Icon, label, value, description, href, action }) => (
              <article key={label} className="contact-fade-up rounded-xl border border-slate-800 bg-slate-950/50 p-4 transition-colors duration-300 hover:border-indigo-400/40 sm:p-5 lg:flex lg:items-start lg:gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-indigo-400/20 bg-indigo-400/10 text-indigo-300" aria-hidden="true">
                  <Icon size={17} strokeWidth={1.7} />
                </div>
                <div className="mt-4 min-w-0 lg:mt-0">
                  <h3 className="text-sm font-semibold text-white">{label}</h3>
                  <p className="mt-1 break-words text-sm text-slate-300">{value}</p>
                  {description && <p className="mt-1 text-xs leading-5 text-slate-500">{description}</p>}
                  {action && (href ? <a href={href} className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-indigo-300 transition-colors hover:text-indigo-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400">{action}</a> : <span className="mt-3 inline-flex cursor-not-allowed text-xs font-semibold text-slate-600" title="Contact number will be configured soon">{action}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}

export default ContactSection