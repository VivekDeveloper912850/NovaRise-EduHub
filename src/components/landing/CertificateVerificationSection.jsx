import CertificateVerificationCard from './CertificateVerificationCard'
import VerificationHighlights from './VerificationHighlights'
import verificationHighlights from './verificationData'

function CertificateVerificationSection() {
  return (
    <section id="verify-certificate" className="scroll-mt-24 border-b border-slate-800 bg-slate-900/70 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-20 lg:px-10 lg:py-24">
        <div className="max-w-xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo-300">Certificate Verification</p>
          <h2 className="mt-4 max-w-lg text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">Verify learning credentials with confidence.</h2>
          <p className="mt-5 text-base leading-7 text-slate-400">Enter a certificate ID to check certificate details. Verification will be connected to official certificate records in a future release.</p>
          <VerificationHighlights highlights={verificationHighlights} />
        </div>

        <CertificateVerificationCard />
      </div>
    </section>
  )
}

export default CertificateVerificationSection