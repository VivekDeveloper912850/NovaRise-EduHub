function VerificationHighlights({ highlights }) {
  return (
    <div className="mt-9 space-y-5">
      {highlights.map(({ id, icon: Icon, title, description }) => (
        <article key={id} className="verification-fade-up group flex gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-indigo-400/20 bg-indigo-400/10 text-indigo-300 transition-colors duration-300 group-hover:border-indigo-300/50 group-hover:bg-indigo-400/15" aria-hidden="true">
            <Icon size={18} strokeWidth={1.7} />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">{title}</h3>
            <p className="mt-1 text-sm leading-6 text-slate-400">{description}</p>
          </div>
        </article>
      ))}
    </div>
  )
}

export default VerificationHighlights