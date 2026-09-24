import { Layers3 } from 'lucide-react'

function ProgramSummary({ program, onChange, programs, selectRef, error }) {
  return (
    <div className="rounded-xl border border-indigo-400/20 bg-indigo-500/10 p-4 sm:p-5">
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-indigo-400/25 bg-indigo-400/10 text-indigo-300" aria-hidden="true">
          <Layers3 size={18} />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-indigo-300">Selected Program</p>
          {program ? (
            <>
              <h3 className="mt-2 text-base font-semibold text-white">{program.title}</h3>
              <p className="mt-1 text-xs uppercase tracking-wide text-slate-500">Domain</p>
              <p className="mt-1 text-sm text-slate-300">{program.category}</p>
            </>
          ) : (
            <select ref={selectRef} id="selected-program" value="" onChange={onChange} aria-invalid={Boolean(error)} aria-describedby={error ? 'selectedProgram-error' : undefined} className="mt-2 min-h-11 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 text-sm text-white outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20">
              <option value="" disabled>Choose a program</option>
              {programs.map((option) => <option key={option.id} value={option.id}>{option.title}</option>)}
            </select>
          )}
        </div>
      </div>
      {program && <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-indigo-400/15 pt-4 text-xs"><span className="text-slate-500">Mode</span><span className="rounded-md border border-emerald-400/25 bg-emerald-400/10 px-2.5 py-1 font-medium text-emerald-300">{program.mode}</span><span className="text-slate-400">{program.format}</span></div>}
      {error && <p id="selectedProgram-error" className="mt-2 text-xs text-rose-400" role="alert">{error}</p>}
    </div>
  )
}

export default ProgramSummary