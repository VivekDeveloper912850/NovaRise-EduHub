import { ArrowRight, Layers3 } from 'lucide-react'

function ProgramCard({ program, onViewDetails }) {
  const { category, description, format, icon: Icon, mode, title } = program

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/50 hover:shadow-xl hover:shadow-indigo-950/20 sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-indigo-400/20 bg-indigo-400/10 text-indigo-300"><Icon size={20} strokeWidth={1.7} aria-hidden="true" /></div>
        <span className="pt-1 text-right text-[10px] font-semibold uppercase tracking-[0.12em] text-indigo-300">{category}</span>
      </div>

      <h3 className="mt-5 text-lg font-semibold leading-tight tracking-tight text-white">{title}</h3>
      <p className="mt-3 min-h-[3rem] text-sm leading-6 text-slate-400">{description}</p>

      <div className="mt-5 grid grid-cols-2 gap-3 border-t border-slate-800 pt-4 text-xs"><div><p className="text-slate-500">Mode</p><p className="mt-1 font-medium text-slate-200">{mode}</p></div><div><p className="text-slate-500">Format</p><p className="mt-1 flex items-center gap-1.5 font-medium text-slate-200"><Layers3 size={13} className="text-indigo-300" aria-hidden="true" />{format}</p></div></div>

      <div className="mt-6 flex items-center justify-between gap-3"><button type="button" onClick={() => onViewDetails(program)} className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900">View Details <ArrowRight size={15} aria-hidden="true" /></button><a href={`/apply/${program.id}`} className="inline-flex min-h-10 items-center justify-center rounded-lg bg-indigo-500 px-4 text-sm font-semibold text-white transition-colors hover:bg-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900">Apply Now</a></div>
    </article>
  )
}

export default ProgramCard