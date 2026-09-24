function AboutHighlights({ highlights }) {
  return (
    <div className="mt-10 grid gap-3 sm:grid-cols-3 lg:mt-12 lg:gap-4">
      {highlights.map(({ id, icon: Icon, title, description }) => (
        <article key={id} className="about-fade-up group rounded-xl border border-slate-800 bg-slate-900/60 p-4 transition-colors duration-300 hover:border-indigo-400/50 hover:bg-slate-900 sm:p-5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-indigo-400/20 bg-indigo-400/10 text-indigo-300 transition-colors duration-300 group-hover:border-indigo-300/50 group-hover:bg-indigo-400/15" aria-hidden="true">
            <Icon size={17} strokeWidth={1.7} />
          </div>
          <h3 className="mt-4 text-sm font-semibold text-white">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
        </article>
      ))}
    </div>
  )
}

export default AboutHighlights