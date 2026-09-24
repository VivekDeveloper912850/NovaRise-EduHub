import { CheckCircle2, House, ArrowLeft } from 'lucide-react'

function SuccessMessage({ applicationId }) {
  return (
    <div className="mx-auto max-w-2xl rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-6 text-center sm:p-10">
      <CheckCircle2 size={42} className="mx-auto text-emerald-300" aria-hidden="true" />
      <h1 className="mt-5 text-2xl font-semibold text-white sm:text-3xl">Application Submitted Successfully</h1>
      <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-slate-300">Thank you for applying to NovaRise EduHub. Our team will contact you regarding your application.</p>
      <p className="mt-5 text-sm text-slate-400">Application ID: <span className="font-semibold text-emerald-300">{applicationId}</span></p>
      <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
        <a href="/#programs" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-indigo-500 px-5 text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"><ArrowLeft size={16} aria-hidden="true" />Back to Programs</a>
        <a href="/#home" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-slate-700 px-5 text-sm font-semibold text-slate-200 hover:border-indigo-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"><House size={16} aria-hidden="true" />Return to Home</a>
      </div>
    </div>
  )
}

export default SuccessMessage