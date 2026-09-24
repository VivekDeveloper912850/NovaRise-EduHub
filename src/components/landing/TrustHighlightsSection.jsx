import { BookOpen, BriefcaseBusiness, FolderKanban, TrendingUp } from 'lucide-react'
import TrustHighlightCard from './TrustHighlightCard'

const highlights = [
  {
    icon: BookOpen,
    title: 'Practical Learning',
    description: 'Learn through structured content and practical skill-building experiences.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Industry-Relevant Programs',
    description: 'Explore programs focused on skills aligned with real-world industry needs.',
  },
  {
    icon: FolderKanban,
    title: 'Hands-On Projects',
    description: 'Apply your knowledge by working on practical and project-based tasks.',
  },
  {
    icon: TrendingUp,
    title: 'Career-Focused Growth',
    description: 'Build confidence, strengthen your skills, and prepare for future opportunities.',
  },
]

function TrustHighlightsSection() {
  return (
    <section id="highlights" className="border-y border-slate-800 bg-slate-900/70">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10 lg:py-14">
        <div className="mb-8 max-w-xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo-300">Why Nova Rise</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">Learning designed to move you forward.</h2>
        </div>

        <div className="grid gap-0 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4 lg:gap-x-0">
          {highlights.map((highlight) => (
            <TrustHighlightCard key={highlight.title} {...highlight} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustHighlightsSection