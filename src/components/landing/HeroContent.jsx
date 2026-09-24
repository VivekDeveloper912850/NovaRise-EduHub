import { ArrowUpRight, Sparkles } from 'lucide-react'
import HeroActions from './HeroActions'
import HeroBenefits from './HeroBenefits'

function HeroContent() {
  return (
    <div className="hero-fade-up max-w-2xl">
      <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-indigo-400/25 bg-indigo-400/10 px-3.5 py-2 text-[11px] font-semibold tracking-[0.16em] text-indigo-200">
        <Sparkles size={14} strokeWidth={1.8} aria-hidden="true" />
        <span>PRACTICAL LEARNING. REAL PROGRESS.</span>
      </div>

      <h1 className="max-w-3xl text-[clamp(2.5rem,5.2vw,4.25rem)] font-semibold leading-[1.06] tracking-[-0.045em] text-white">
        Build Skills That Move Your Career Forward.
      </h1>
      <p className="mt-7 max-w-xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
        Learn practical, industry-relevant skills through structured programs, hands-on projects, and career-focused learning experiences.
      </p>

      <HeroActions />
      <HeroBenefits />

      <a href="#how-it-works" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950">
        See how Nova Rise works
        <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    </div>
  )
}

export default HeroContent