import { useEffect, useState } from 'react'
import programs from './programData'
import { branchOptions } from './programData'
import ProgramCard from './ProgramCard'
import ProgramDetailsModal from './ProgramDetailsModal'

function ProgramsSection() {
  const [selectedBranch, setSelectedBranch] = useState('')
  const [selectedProgram, setSelectedProgram] = useState(null)
  const filteredPrograms = selectedBranch ? programs.filter((program) => program.branch === selectedBranch) : programs

  useEffect(() => {
    if (!selectedProgram) return undefined
    const closeOnEscape = (event) => { if (event.key === 'Escape') setSelectedProgram(null) }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [selectedProgram])

  return (
    <section id="programs" className="scroll-mt-24 border-b border-slate-800 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl"><p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo-300">Explore Programs</p><h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">Explore Programs</h2><p className="mt-5 max-w-xl text-base leading-7 text-slate-400">Choose your engineering or technology background to explore relevant online programs.</p></div>
          <div className="w-full max-w-md"><label htmlFor="program-branch" className="text-sm font-medium text-slate-200">Select your branch</label><select id="program-branch" value={selectedBranch} onChange={(event) => setSelectedBranch(event.target.value)} className="mt-2 min-h-12 w-full rounded-lg border border-slate-700 bg-slate-900 px-4 text-sm text-white outline-none transition-colors focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20"><option value="">All Programs</option>{branchOptions.map((branch) => <option key={branch} value={branch}>{branch}</option>)}</select></div>
        </div>

        <p className="mt-8 text-sm text-slate-400" aria-live="polite"><span className="font-semibold text-slate-200">{filteredPrograms.length}</span> {filteredPrograms.length === 1 ? 'program' : 'programs'} available</p>
        {filteredPrograms.length > 0 ? <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-4">{filteredPrograms.map((program) => <ProgramCard key={program.id} program={program} onViewDetails={setSelectedProgram} />)}</div> : <div className="mt-5 rounded-2xl border border-dashed border-slate-700 bg-slate-900/60 px-6 py-12 text-center"><h3 className="text-lg font-semibold text-white">No programs found</h3><p className="mt-2 text-sm text-slate-400">Try selecting another branch to explore available programs.</p><button type="button" onClick={() => setSelectedBranch('')} className="mt-5 min-h-10 rounded-lg bg-indigo-500 px-4 text-sm font-semibold text-white transition-colors hover:bg-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300">View All Programs</button></div>}
      </div>
      <ProgramDetailsModal program={selectedProgram} onClose={() => setSelectedProgram(null)} />
    </section>
  )
}

export default ProgramsSection