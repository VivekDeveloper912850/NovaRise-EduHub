import { useState } from 'react'
import FAQItem from './FAQItem'
import faqItems from './faqData'

function FAQSection() {
  const [openItemId, setOpenItemId] = useState(null)

  return (
    <section id="faq" className="scroll-mt-24 border-b border-slate-800 bg-slate-950 text-white">
      <div className="mx-auto max-w-4xl px-5 py-14 sm:px-8 lg:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo-300">Frequently Asked Questions</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">Questions, answered clearly.</h2>
          <p className="mt-4 text-base leading-7 text-slate-400">Find answers to common questions about Nova Rise programs, the learning process, applications, projects, and certificates.</p>
        </div>

        <div className="faq-fade-up mt-9 rounded-2xl border border-slate-800 bg-slate-900/60 px-5 sm:px-7">
          {faqItems.map((faqItem) => (
            <FAQItem
              key={faqItem.id}
              {...faqItem}
              isOpen={openItemId === faqItem.id}
              onToggle={() => setOpenItemId((currentId) => currentId === faqItem.id ? null : faqItem.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection