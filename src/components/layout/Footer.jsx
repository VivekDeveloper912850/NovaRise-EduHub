import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import BrandLogo from './BrandLogo'

const footerLinks = {
  programs: [
    { label: 'AI & Machine Learning', href: '#programs' },
    { label: 'Full Stack Web Development', href: '#programs' },
    { label: 'Full Stack Java Development', href: '#programs' },
    { label: 'AutoCAD & Design Fundamentals', href: '#programs' },
  ],
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Contact', href: '#contact' },
  ],
  support: [
    { label: 'FAQ', href: '#faq' },
    { label: 'Verify Certificate', href: '#verify-certificate' },
    { label: 'Help & Support', href: '#contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms & Conditions', href: '#' },
  ],
}

const socialLinks = [
  { label: 'LinkedIn', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'GitHub', href: '#' },
  { label: 'YouTube', href: '#' },
]

function FooterLinkGroup({ title, links }) {
  return (
    <div>
      <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-200">{title}</h2>
      <ul className="mt-5 space-y-3">
        {links.map(({ label, href }) => (
          <li key={label}>
            <a href={href} className="text-sm leading-6 text-slate-400 transition-colors hover:text-indigo-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">{label}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(260px,1.5fr)_repeat(4,minmax(0,1fr))] lg:gap-10">
          <div className="max-w-sm">
            <a href="#home" className="inline-flex items-center gap-3 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950" aria-label="Nova Rise home">
              <BrandLogo variant="footer" />
              <span className="text-[17px] font-semibold tracking-[-0.02em]">Nova Rise</span>
            </a>
            <p className="mt-5 text-sm leading-6 text-slate-400">Build practical, industry-relevant skills through structured online programs and hands-on learning experiences.</p>

            <div className="mt-6 text-sm text-slate-400">
              <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-200">Connect With Us</h2>
              <div className="mt-5 space-y-3">
                <a href="https://www.google.com/maps/search/?api=1&query=A-Block%2C%20Street%20No-2%2C%20Near%20Mayur%20Garden%2C%20Kamal%20Vihar%2C%20Karawal%20Nagar%2C%20North%20East%20Delhi%20110094" target="_blank" rel="noopener noreferrer" aria-label="View NovaRise EduHub address on Google Maps" className="flex min-w-0 items-start gap-2.5 transition-colors hover:text-indigo-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-indigo-300" aria-hidden="true" />
                  <span className="leading-6">A-Block, Street No-2,<br />Near Mayur Garden,<br />Kamal Vihar, Karawal Nagar,<br />North East Delhi – 110094</span>
                </a>
                <a href="mailto:Novariseeduhub@gmail.com" aria-label="Email NovaRise EduHub" className="flex min-w-0 items-start gap-2.5 break-all transition-colors hover:text-indigo-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400">
                  <Mail size={16} className="mt-0.5 shrink-0 text-indigo-300" aria-hidden="true" />
                  <span>Novariseeduhub@gmail.com</span>
                </a>
                <a href="tel:+919955573542" aria-label="Call NovaRise EduHub" className="flex items-center gap-2.5 transition-colors hover:text-indigo-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400">
                  <Phone size={16} className="shrink-0 text-indigo-300" aria-hidden="true" />
                  <span>+91 99555 73542</span>
                </a>
                <a href="https://wa.me/919955573542?text=Hello%20NovaRise%20EduHub%2C%20I%20would%20like%20to%20know%20more%20about%20your%20programs." target="_blank" rel="noopener noreferrer" aria-label="Contact NovaRise EduHub on WhatsApp" className="flex items-center gap-2.5 transition-colors hover:text-indigo-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400">
                  <MessageCircle size={16} className="shrink-0 text-indigo-300" aria-hidden="true" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="mt-7 flex items-center gap-2.5">
              {socialLinks.map(({ label, href }) => (
                <a key={label} href={href} aria-label={label} title={label} className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 text-slate-400 transition-colors hover:border-indigo-400/50 hover:text-indigo-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                  <span className="text-[10px] font-semibold uppercase tracking-wide" aria-hidden="true">{label.slice(0, 2)}</span>
                </a>
              ))}
            </div>
          </div>

          <FooterLinkGroup title="Programs" links={footerLinks.programs} />
          <FooterLinkGroup title="Company" links={footerLinks.company} />
          <FooterLinkGroup title="Support" links={footerLinks.support} />
          <FooterLinkGroup title="Legal" links={footerLinks.legal} />
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-800 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Nova Rise. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="transition-colors hover:text-indigo-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400">Privacy</a>
            <a href="#" className="transition-colors hover:text-indigo-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer