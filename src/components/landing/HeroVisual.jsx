import { ArrowUpRight, Check, Circle, Code2, Layers3, LockKeyhole, Play, Sparkles, Trophy } from 'lucide-react'

function ProgressBar({ value, className = '' }) {
  return (
    <div className={`h-1.5 overflow-hidden rounded-full bg-slate-800 ${className}`}>
      <div className="h-full rounded-full bg-indigo-400" style={{ width: `${value}%` }} />
    </div>
  )
}

function HeroVisual() {
  return (
    <div className="hero-float relative mx-auto w-full max-w-xl lg:ml-auto">
      <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-indigo-500/10 blur-3xl" />

      <div className="relative rounded-2xl border border-slate-700/80 bg-slate-900/95 p-3 shadow-2xl shadow-black/30 sm:p-4">
        <div className="flex items-center justify-between border-b border-slate-800 px-2 pb-4 sm:px-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/15 text-indigo-300">
              <Layers3 size={16} aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-200">Learning dashboard</p>
              <p className="mt-0.5 text-[10px] text-slate-500">Monday, 09 September</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] text-emerald-300">
            <Circle size={7} fill="currentColor" aria-hidden="true" />
            On track
          </div>
        </div>

        <div className="grid gap-3 pt-3 sm:grid-cols-[1.18fr_0.82fr]">
          <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-indigo-300">Your learning journey</p>
                <h2 className="mt-2 text-base font-semibold text-white sm:text-lg">Frontend Development</h2>
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-indigo-400/20 bg-indigo-400/10 text-indigo-300">
                <Code2 size={18} aria-hidden="true" />
              </div>
            </div>
            <div className="mt-8 flex items-end justify-between text-xs">
              <span className="text-slate-400">Course progress</span>
              <span className="font-semibold text-white">75% <span className="font-normal text-slate-500">complete</span></span>
            </div>
            <ProgressBar value={75} className="mt-2" />
            <div className="mt-5 flex items-center justify-between text-[10px] text-slate-500">
              <span>12 of 16 modules</span>
              <span>4h 20m left</span>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-4">
            <div className="flex items-center justify-between">
              <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-slate-500">This week</p>
              <Sparkles size={15} className="text-indigo-300" aria-hidden="true" />
            </div>
            <p className="mt-3 text-2xl font-semibold tracking-tight text-white">08<span className="ml-1 text-sm font-normal text-slate-500">hours</span></p>
            <div className="mt-4 flex h-12 items-end gap-1.5">
              {[38, 58, 46, 76, 62, 88, 54].map((height, index) => (
                <div key={height} className="flex flex-1 items-end rounded-sm bg-slate-800" style={{ height: '100%' }}>
                  <div className={`w-full rounded-sm ${index === 5 ? 'bg-indigo-400' : 'bg-slate-700'}`} style={{ height: `${height}%` }} />
                </div>
              ))}
            </div>
            <div className="mt-2 flex justify-between text-[9px] text-slate-600"><span>M</span><span>W</span><span>F</span><span>S</span></div>
          </div>
        </div>

        <div className="mt-3 grid gap-3 sm:grid-cols-[1fr_0.9fr]">
          <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-amber-400/10 text-amber-300"><Play size={13} fill="currentColor" aria-hidden="true" /></div>
                <p className="text-xs font-semibold text-slate-200">Practical projects</p>
              </div>
              <ArrowUpRight size={15} className="text-slate-600" aria-hidden="true" />
            </div>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex -space-x-1.5">
                <span className="h-5 w-5 rounded-full border-2 border-slate-950 bg-indigo-400" />
                <span className="h-5 w-5 rounded-full border-2 border-slate-950 bg-cyan-300" />
                <span className="h-5 w-5 rounded-full border-2 border-slate-950 bg-amber-300" />
              </div>
              <span className="text-[10px] text-slate-500">3 projects in progress</span>
            </div>
          </div>
          <div className="rounded-xl border border-indigo-400/20 bg-indigo-500/10 p-4">
            <div className="flex items-center gap-2 text-indigo-200">
              <Trophy size={16} aria-hidden="true" />
              <p className="text-xs font-semibold">Certificate ready</p>
            </div>
            <div className="mt-3 flex items-center gap-2 text-[10px] text-indigo-200/70">
              <Check size={13} aria-hidden="true" />
              Frontend foundations
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -right-3 top-20 hidden rounded-xl border border-slate-700 bg-slate-900 px-3 py-2.5 shadow-xl shadow-black/30 sm:block lg:-right-8">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-300"><LockKeyhole size={14} aria-hidden="true" /></div>
          <div><p className="text-[10px] font-semibold text-slate-200">Skill verified</p><p className="text-[9px] text-slate-500">Keep building</p></div>
        </div>
      </div>
    </div>
  )
}

export default HeroVisual