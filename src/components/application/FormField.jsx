function FormField({ id, label, error, required = false, children, className = '' }) {
  const errorId = `${id}-error`

  return (
    <div className={className}>
      <label htmlFor={id} className="text-sm font-medium text-slate-200">
        {label}{required && <span className="ml-1 text-indigo-300" aria-hidden="true">*</span>}
      </label>
      {children}
      {error && <p id={errorId} className="mt-1.5 text-xs leading-5 text-rose-400" role="alert">{error}</p>}
    </div>
  )
}

export default FormField