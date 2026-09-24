function FormSection({ icon: Icon, title, description, children }) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 sm:p-7">
      <div className="flex items-start gap-3 border-b border-slate-800 pb-5">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-indigo-400/20 bg-indigo-400/10 text-indigo-300" aria-hidden="true">
          <Icon size={18} strokeWidth={1.7} />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-white">{title}</h2>
          {description && <p className="mt-1 text-sm leading-6 text-slate-400">{description}</p>}
        </div>
      </div>
      <div className="mt-6">{children}</div>
    </section>
  )
}

export default FormSection