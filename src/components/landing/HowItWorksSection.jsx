import processSteps from './processStepsData'
import ProcessStep from './ProcessStep'

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="scroll-mt-24 border-b border-slate-800 bg-slate-900/70 text-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo-300">How It Works</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">A clear path from learning to doing.</h2>
          <p className="mt-5 text-base leading-7 text-slate-400">Follow a simple, structured process to choose a program, build practical skills, and complete your learning journey with confidence.</p>
        </div>

        <div className="mt-14 grid gap-0 md:grid-cols-3 md:gap-x-6 lg:grid-cols-6 lg:gap-4">
          {processSteps.map((processStep, index) => (
            <ProcessStep key={processStep.id} {...processStep} isLast={index === processSteps.length - 1} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#programs" className="inline-flex min-h-11 items-center justify-center rounded-lg bg-indigo-500 px-5 text-sm font-semibold text-white transition-colors hover:bg-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900">Explore Programs</a>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection