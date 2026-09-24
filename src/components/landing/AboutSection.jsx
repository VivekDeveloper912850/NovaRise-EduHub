import AboutHighlights from './AboutHighlights'
import AboutVisual from './AboutVisual'
import aboutHighlights from './aboutData'

function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 border-b border-slate-800 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] lg:gap-20">
          <AboutVisual />

          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo-300">About Nova Rise</p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">Practical learning for the skills of tomorrow.</h2>
            <p className="mt-5 text-base leading-7 text-slate-400">Nova Rise is a learning platform focused on helping learners develop practical, industry-relevant skills through structured programs, hands-on projects, and continuous improvement.</p>
            <p className="mt-4 text-base leading-7 text-slate-400">Our approach combines clear learning paths, relevant technologies, and practical application so learners can move from understanding concepts to building meaningful work.</p>

            <AboutHighlights highlights={aboutHighlights} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection