import { ArrowRight, Check, X } from 'lucide-react'

function ProgramDetailsModal({ program, onClose }) {
  if (!program) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/75 p-5 backdrop-blur-sm" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
      <div className="w-full max-w-lg rounded-2xl border border-slate-700 bg-slate-900 p-6 text-white shadow-2xl shadow-slate-950/40 sm:p-7" role="dialog" aria-modal="true" aria-labelledby="program-details-title">
        <div className="flex items-start justify-between gap-5"><div><p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-indigo-300">{program.category}</p><h2 id="program-details-title" className="mt-2 text-2xl font-semibold leading-tight tracking-tight">{program.title}</h2></div><button type="button" onClick={onClose} className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400" aria-label="Close program details"><X size={18} /></button></div>
        <p className="mt-5 text-sm leading-6 text-slate-300">{program.description}</p>
        <div className="mt-6 grid grid-cols-2 gap-3 border-y border-slate-800 py-4 text-sm"><div><p className="text-xs text-slate-500">Branch</p><p className="mt-1 font-medium text-slate-200">{program.branch}</p></div><div><p className="text-xs text-slate-500">Mode</p><p className="mt-1 font-medium text-slate-200">{program.mode}</p></div></div>
        <div className="mt-5 space-y-3 text-sm text-slate-300"><p className="flex items-center gap-2"><Check size={16} className="text-indigo-300" aria-hidden="true" />Learning approach: structured, practical learning</p><p className="flex items-center gap-2"><Check size={16} className="text-indigo-300" aria-hidden="true" />Project-based learning</p></div>
        <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end"><button type="button" onClick={onClose} className="min-h-11 rounded-lg border border-slate-700 px-4 text-sm font-semibold text-slate-300 transition-colors hover:border-slate-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400">Close</button><a href={`/apply/${program.id}`} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-indigo-500 px-4 text-sm font-semibold text-white transition-colors hover:bg-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300">Apply Now <ArrowRight size={16} aria-hidden="true" /></a></div>
      </div>
    </div>
  )
}

export default ProgramDetailsModal