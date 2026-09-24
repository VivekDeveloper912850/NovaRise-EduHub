import { useState } from 'react'
import { ArrowRight, BadgeCheck, Search } from 'lucide-react'

function CertificateVerificationCard() {
  const [certificateId, setCertificateId] = useState('')
  const [message, setMessage] = useState('')
  const [hasSubmitted, setHasSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    const trimmedId = certificateId.trim()

    setHasSubmitted(true)
    setMessage(trimmedId ? 'Verification service will be available soon. Please check back later.' : 'Please enter a certificate ID to continue.')
  }

  return (
    <div className="verification-fade-up rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-2xl shadow-slate-950/20 sm:p-7">
      <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-indigo-300">Certificate Verification</p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight text-white">Check a learning credential</h3>
          <p className="mt-2 text-sm leading-6 text-slate-400">Enter your certificate ID to begin.</p>
        </div>
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-indigo-400/20 bg-indigo-400/10 text-indigo-300" aria-hidden="true">
          <BadgeCheck size={20} strokeWidth={1.7} />
        </div>
      </div>

      <form className="mt-6" onSubmit={handleSubmit} noValidate>
        <label htmlFor="certificate-id" className="text-sm font-medium text-slate-200">Certificate ID</label>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <input
            id="certificate-id"
            name="certificateId"
            type="text"
            value={certificateId}
            onChange={(event) => {
              setCertificateId(event.target.value)
              if (hasSubmitted) setMessage('')
            }}
            placeholder="e.g. NR-2026-XXXX"
            autoComplete="off"
            aria-describedby="certificate-helper certificate-status"
            className="min-h-11 min-w-0 flex-1 rounded-lg border border-slate-700 bg-slate-950 px-3.5 text-sm text-white outline-none transition-colors placeholder:text-slate-600 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20"
          />
          <button type="submit" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-indigo-500 px-4 text-sm font-semibold text-white transition-colors hover:bg-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900">
            Verify Certificate
            <ArrowRight size={16} aria-hidden="true" />
          </button>
        </div>
        <p id="certificate-helper" className="mt-3 text-xs leading-5 text-slate-500">Verification will be connected to official certificate records in a future release.</p>

        <div id="certificate-status" className="mt-5 flex min-h-16 items-start gap-3 rounded-lg border border-slate-800 bg-slate-950/60 p-4" role="status" aria-live="polite">
          <Search size={17} className="mt-0.5 shrink-0 text-indigo-300" aria-hidden="true" />
          <p className="text-sm leading-6 text-slate-400">{message || 'Enter a certificate ID to view verification details.'}</p>
        </div>
      </form>
    </div>
  )
}

export default CertificateVerificationCard