import { ChevronDown } from 'lucide-react'

function FAQItem({ id, question, answer, isOpen, onToggle }) {
  const answerId = `faq-answer-${id}`

  return (
    <article className="border-b border-slate-800 last:border-b-0">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={answerId}
          className="flex w-full items-center justify-between gap-5 py-4 text-left text-sm font-semibold text-white transition-colors hover:text-indigo-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:py-[1.125rem]"
        >
          <span>{question}</span>
          <ChevronDown size={18} className={`shrink-0 text-indigo-300 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
        </button>
      </h3>
      <div id={answerId} className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="min-h-0 overflow-hidden">
          <p className="max-w-3xl pb-4 pr-8 text-sm leading-6 text-slate-400 sm:pb-5">{answer}</p>
        </div>
      </div>
    </article>
  )
}

export default FAQItem