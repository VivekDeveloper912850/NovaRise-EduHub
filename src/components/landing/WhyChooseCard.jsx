function WhyChooseCard({ icon: Icon, title, description }) {
  return (
    <article className="why-fade-up group rounded-xl border border-slate-800 bg-slate-900/60 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-400/50 hover:bg-slate-900 focus-within:border-indigo-400/50 sm:p-6">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-indigo-400/20 bg-indigo-400/10 text-indigo-300 transition-colors duration-300 group-hover:border-indigo-300/50 group-hover:bg-indigo-400/15" aria-hidden="true">
        <Icon size={19} strokeWidth={1.7} />
      </div>
      <h3 className="mt-5 text-base font-semibold leading-snug text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
    </article>
  )
}

export default WhyChooseCard