import HeroContent from './HeroContent'
import HeroVisual from './HeroVisual'

function HeroSection() {
  return (
    <section id="home" className="scroll-mt-24 relative isolate overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_72%_18%,rgba(99,102,241,0.18),transparent_32%),radial-gradient(circle_at_14%_76%,rgba(79,70,229,0.1),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.14] [background-image:linear-gradient(rgba(148,163,184,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.22)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />

      <div className="mx-auto grid min-h-[calc(100svh-72px)] max-w-7xl items-center gap-16 px-5 py-20 sm:px-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(480px,1.08fr)] lg:gap-10 lg:px-10 lg:py-24">
        <HeroContent />
        <HeroVisual />
      </div>
    </section>
  )
}

export default HeroSection