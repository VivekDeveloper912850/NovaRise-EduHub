import { ArrowRight, BookOpenCheck, Check, FolderKanban, Route, TrendingUp } from 'lucide-react'
import whyChooseFeatures from './whyChooseData'
import WhyChooseCard from './WhyChooseCard'

const learningPath = [
  { label: 'Learn', icon: BookOpenCheck },
  { label: 'Practice', icon: Check },
  { label: 'Build', icon: FolderKanban },
  { label: 'Grow', icon: TrendingUp },
]

function WhyChooseSection() {
  return (
    <section id="why-nova-rise" className="overflow-hidden border-b border-slate-800 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[minmax(260px,0.82fr)_minmax(0,1.5fr)] lg:items-center lg:gap-16 lg:px-10 lg:py-24">
        <div className="max-w-lg">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo-300">Why Nova Rise</p>
          <h2 className="mt-4 max-w-md text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">Learning designed to move you forward.</h2>
          <p className="mt-5 text-base leading-7 text-slate-400">Nova Rise focuses on practical learning experiences that help you understand concepts, build real projects, and develop skills relevant to your future goals.</p>

          <div className="relative mt-10 overflow-hidden rounded-2xl border border-indigo-400/20 bg-gradient-to-br from-indigo-500/10 via-slate-900/70 to-slate-950 p-5 sm:p-6" aria-label="Nova Rise learning path">
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full border border-indigo-400/10" aria-hidden="true" />
            <div className="absolute -bottom-16 -left-10 h-32 w-32 rounded-full border border-indigo-400/10" aria-hidden="true" />
            <div className="relative">
              <div className="flex items-center justify-between gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                <span>Learning path</span>
                <Route size={15} className="text-indigo-300" aria-hidden="true" />
              </div>
              <div className="mt-7 grid grid-cols-4 gap-2 sm:gap-3">
                {learningPath.map(({ label, icon: Icon }, index) => (
                  <div key={label} className="relative text-center">
                    <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full border border-indigo-400/30 bg-slate-950 text-indigo-300">
                      <Icon size={16} strokeWidth={1.8} aria-hidden="true" />
                    </div>
                    <p className="mt-3 text-xs font-medium text-slate-300">{label}</p>
                    {index < learningPath.length - 1 && <ArrowRight className="absolute -right-3 top-3 hidden text-indigo-400/50 sm:block" size={14} aria-hidden="true" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
          {whyChooseFeatures.map((feature) => <WhyChooseCard key={feature.id} {...feature} />)}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseSection