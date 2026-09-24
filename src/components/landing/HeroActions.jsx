import { ArrowRight, Play } from 'lucide-react'

function HeroActions() {
  return (
    <div className="mt-9 flex flex-wrap items-center gap-3">
      <a href="#programs" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-indigo-500 px-5 text-sm font-semibold text-white shadow-lg shadow-indigo-950/40 transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
        Explore Programs
        <ArrowRight size={17} aria-hidden="true" />
      </a>
      <a href="#how-it-works" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/50 px-5 text-sm font-semibold text-slate-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-500 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
        <Play size={15} fill="currentColor" aria-hidden="true" />
        How It Works
      </a>
    </div>
  )
}

export default HeroActions