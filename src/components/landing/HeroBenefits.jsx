import { Award, BriefcaseBusiness, FolderKanban } from 'lucide-react'

const benefits = [
  { label: 'Project-Based Learning', icon: FolderKanban },
  { label: 'Industry-Relevant Skills', icon: BriefcaseBusiness },
  { label: 'Certificate Support', icon: Award },
]

function HeroBenefits() {
  return (
    <div className="mt-12 grid max-w-xl gap-4 border-t border-slate-800 pt-6 sm:grid-cols-3 sm:gap-5">
      {benefits.map(({ label, icon: Icon }) => (
        <div key={label} className="flex items-center gap-2.5 text-xs leading-5 text-slate-400 sm:block">
          <Icon className="shrink-0 text-indigo-300" size={17} strokeWidth={1.7} aria-hidden="true" />
          <span className="sm:mt-2 sm:block">{label}</span>
        </div>
      ))}
    </div>
  )
}

export default HeroBenefits