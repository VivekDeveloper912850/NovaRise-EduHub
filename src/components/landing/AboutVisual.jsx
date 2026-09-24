import { ArrowUpRight, BookOpen, Check, Code2, Lightbulb, TrendingUp } from 'lucide-react'
import BrandLogo from '../layout/BrandLogo'

const pathway = [
  { label: 'Learn', icon: BookOpen },
  { label: 'Practice', icon: Lightbulb },
  { label: 'Build', icon: Code2 },
  { label: 'Grow', icon: TrendingUp },
]

function AboutVisual() {
  return (
    <div className="about-fade-up relative mx-auto w-full max-w-xl" aria-label="Nova Rise learning pathway visual">
      <div className="absolute -inset-5 rounded-[2rem] border border-indigo-400/10 bg-indigo-500/[0.03]" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-2xl border border-indigo-400/25 bg-gradient-to-br from-indigo-500/15 via-slate-900 to-slate-950 p-5 shadow-2xl shadow-indigo-950/20 sm:p-7">
        <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full border border-indigo-300/10" aria-hidden="true" />
        <div className="absolute -bottom-24 -left-16 h-52 w-52 rounded-full border border-indigo-300/10" aria-hidden="true" />

        <div className="relative flex items-center justify-between border-b border-slate-800 pb-5">
          <div className="flex items-center gap-3">
            <BrandLogo variant="default" className="h-12 w-12 rounded-lg" />
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-indigo-300">Nova Rise</p>
              <p className="mt-2 text-lg font-semibold text-white">From concept to capability</p>
            </div>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-400/25 bg-indigo-400/10 text-indigo-300" aria-hidden="true">
            <ArrowUpRight size={19} />
          </div>
        </div>

        <div className="relative mt-8 grid grid-cols-4 gap-2 sm:gap-4">
          <div className="absolute left-[12%] right-[12%] top-5 h-px bg-gradient-to-r from-indigo-400/30 via-indigo-300/70 to-indigo-400/30" aria-hidden="true" />
          {pathway.map(({ label, icon: Icon }, index) => (
            <div key={label} className="relative text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-indigo-400/35 bg-slate-950 text-indigo-300 transition-transform duration-300 hover:scale-105">
                <Icon size={17} strokeWidth={1.7} aria-hidden="true" />
              </div>
              <p className="mt-3 text-xs font-medium text-slate-300">{label}</p>
              <p className="mt-1 text-[10px] text-slate-500">0{index + 1}</p>
            </div>
          ))}
        </div>

        <div className="relative mt-8 grid grid-cols-2 gap-3 border-t border-slate-800 pt-5">
          <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-3">
            <Check size={15} className="text-indigo-300" aria-hidden="true" />
            <p className="mt-2 text-xs font-medium text-slate-300">Understand clearly</p>
          </div>
          <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-3">
            <Check size={15} className="text-indigo-300" aria-hidden="true" />
            <p className="mt-2 text-xs font-medium text-slate-300">Create meaningfully</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutVisual