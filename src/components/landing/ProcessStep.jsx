function ProcessStep({ step, title, description, icon: Icon, isLast }) {
  return (
    <article className="process-fade-up group relative flex gap-4 md:block md:text-center">
      {!isLast && <span className="absolute left-5 top-12 h-[calc(100%+1.25rem)] w-px bg-gradient-to-b from-indigo-400/50 to-slate-800 md:hidden" aria-hidden="true" />}
      {!isLast && <span className="absolute left-[calc(50%+2rem)] right-[calc(-50%+2rem)] top-6 hidden h-px bg-gradient-to-r from-indigo-400/50 to-slate-800 lg:block" aria-hidden="true" />}

      <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-indigo-400/35 bg-slate-950 text-indigo-300 transition-all duration-300 group-hover:border-indigo-300 group-hover:bg-indigo-400/10 group-hover:text-indigo-200 md:mx-auto">
        <span className="absolute -top-2 -right-2 rounded bg-slate-900 px-1.5 py-0.5 text-[10px] font-semibold tracking-[0.08em] text-slate-500 transition-colors duration-300 group-hover:text-indigo-300">{String(step).padStart(2, '0')}</span>
        <Icon size={19} strokeWidth={1.7} aria-hidden="true" />
      </div>

      <div className="relative z-10 min-w-0 pb-8 md:mt-5 md:pb-0">
        <h3 className="text-base font-semibold leading-snug text-white">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-400 md:mx-auto md:max-w-[180px]">{description}</p>
      </div>
    </article>
  )
}

export default ProcessStep