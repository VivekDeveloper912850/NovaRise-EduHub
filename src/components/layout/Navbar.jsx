import { useEffect, useState } from 'react'
import BrandLogo from './BrandLogo'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Programs', href: '#programs' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'About Us', href: '#about' },
  { label: 'Verify Certificate', href: '#verify-certificate' },
]

function Icon({ name, size = 18 }) {
  const commonProps = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }

  if (name === 'sun') {
    return <svg {...commonProps}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" /></svg>
  }

  if (name === 'moon') {
    return <svg {...commonProps}><path d="M20.8 15.2A8.5 8.5 0 0 1 8.8 3.2 8.5 8.5 0 1 0 20.8 15.2Z" /></svg>
  }

  if (name === 'menu') {
    return <svg {...commonProps}><path d="M4 6h16M4 12h16M4 18h16" /></svg>
  }

  return <svg {...commonProps}><path d="M6 6l12 12M18 6L6 18" /></svg>
}

function getInitialTheme() {
  const savedTheme = window.localStorage.getItem('nova-rise-theme')
  if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function Navbar() {
  const [theme, setTheme] = useState(getInitialTheme)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    window.localStorage.setItem('nova-rise-theme', theme)
  }, [theme])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const closeMenu = () => setIsMenuOpen(false)
    window.addEventListener('resize', closeMenu)
    return () => window.removeEventListener('resize', closeMenu)
  }, [])

  const toggleTheme = () => setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark')
  const handleHomeClick = (event) => {
    event.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <header className={`sticky top-0 z-50 border-b transition-colors duration-200 ${isScrolled ? 'border-slate-200/90 bg-white/95 shadow-[0_8px_24px_rgba(15,23,42,0.06)] backdrop-blur-md dark:border-slate-800/90 dark:bg-slate-950/95 dark:shadow-black/20' : 'border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950'}`}>
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8 lg:px-10" aria-label="Main navigation">
        <a href="#home" onClick={handleHomeClick} className="group flex shrink-0 items-center gap-3 text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-4 dark:text-white dark:focus-visible:ring-offset-slate-950" aria-label="Nova Rise home">
          <BrandLogo variant="navbar" className="transition-transform duration-200 group-hover:-translate-y-0.5" />
          <span className="text-[17px] font-semibold tracking-[-0.02em]">NovaRise</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item, index) => (
            <a key={item.href} href={item.href} onClick={item.label === 'Home' ? handleHomeClick : undefined} className={`rounded-lg px-3 py-2 text-[13px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${index === 0 ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white'}`}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button type="button" onClick={toggleTheme} className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white" aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
          </button>
          <button type="button" onClick={() => setIsMenuOpen((open) => !open)} className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-700 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 lg:hidden dark:text-slate-200 dark:hover:bg-slate-900" aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={isMenuOpen} aria-controls="mobile-navigation">
            <Icon name={isMenuOpen ? 'close' : 'menu'} />
          </button>
        </div>
      </nav>

      <div id="mobile-navigation" className={`${isMenuOpen ? 'block' : 'hidden'} border-t border-slate-100 bg-white px-5 pb-5 pt-3 lg:hidden dark:border-slate-800 dark:bg-slate-950`}>
        <div className="flex flex-col">
          {navItems.map((item, index) => (
            <a key={item.href} href={item.href} onClick={item.label === 'Home' ? handleHomeClick : () => setIsMenuOpen(false)} className={`border-b border-slate-100 py-3.5 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:border-slate-800 ${index === 0 ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-700 dark:text-slate-200'}`}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Navbar