import './App.css'
import { useEffect, useState } from 'react'
import Navbar from './components/layout/Navbar'
import HeroSection from './components/landing/HeroSection'
import TrustHighlightsSection from './components/landing/TrustHighlightsSection'
import ProgramsSection from './components/landing/ProgramsSection'
import WhyChooseSection from './components/landing/WhyChooseSection'
import HowItWorksSection from './components/landing/HowItWorksSection'
import AboutSection from './components/landing/AboutSection'
import CertificateVerificationSection from './components/landing/CertificateVerificationSection'
import FAQSection from './components/landing/FAQSection'
import ContactSection from './components/landing/ContactSection'
import Footer from './components/layout/Footer'
import ApplicationPage from './components/application/ApplicationPage'
import BrandHero from './components/sections/BrandHero'

function usePathname() {
  const [pathname, setPathname] = useState(() => window.location.pathname)

  useEffect(() => {
    const handlePopState = () => setPathname(window.location.pathname)
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  return pathname
}

function App() {
  const pathname = usePathname()

  if (pathname.startsWith('/apply')) {
    const programId = decodeURIComponent(pathname.split('/')[2] || '')

    return (
      <>
        <Navbar />
        <ApplicationPage programId={programId} />
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <BrandHero />
      <main>
        <HeroSection />
        <TrustHighlightsSection />
        <ProgramsSection />
        <WhyChooseSection />
        <HowItWorksSection />
        <AboutSection />
        <CertificateVerificationSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App
