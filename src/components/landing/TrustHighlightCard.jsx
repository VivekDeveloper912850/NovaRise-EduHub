function TrustHighlightCard({ icon: Icon, title, description }) {
  return (
    <article className="group border-t border-slate-800 px-0 py-6 transition-colors duration-200 hover:border-indigo-400/70 sm:px-1 lg:border-l lg:border-t-0 lg:py-1 lg:pl-6 first:lg:border-l-0 first:lg:pl-1">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-indigo-400/20 bg-indigo-400/10 text-indigo-300 transition-colors duration-200 group-hover:border-indigo-300/40 group-hover:bg-indigo-400/15" aria-hidden="true">
        <Icon size={19} strokeWidth={1.7} />
      </div>
      <h3 className="mt-4 text-sm font-semibold text-white">{title}</h3>
      <p className="mt-2 max-w-xs text-sm leading-6 text-slate-400">{description}</p>
    </article>
  )
}

export default TrustHighlightCard