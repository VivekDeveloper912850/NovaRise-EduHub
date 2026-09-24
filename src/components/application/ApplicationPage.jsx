import { useRef, useState } from 'react'
import { FileCheck, GraduationCap, Layers, Send, User } from 'lucide-react'
import programs from '../landing/programData'
import FormField from './FormField'
import FormSection from './FormSection'
import ProgramSummary from './ProgramSummary'
import SuccessMessage from './SuccessMessage'
import { genderOptions, initialApplicationForm, referralOptions, yearOptions } from './applicationData'
import { submitApplication } from '../../services/applicationService'

const inputClass = 'mt-2 min-h-11 w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 text-sm text-white outline-none transition-colors placeholder:text-slate-600 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20'
const selectClass = `${inputClass} appearance-none`

function ApplicationPage({ programId }) {
  const initialProgram = programs.find((program) => program.id === programId) || null
  const [form, setForm] = useState({ ...initialApplicationForm, selectedProgram: initialProgram?.id || '' })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submissionError, setSubmissionError] = useState('')
  const [applicationId, setApplicationId] = useState('')
  const fieldRefs = useRef({})

  const selectedProgram = programs.find((program) => program.id === form.selectedProgram) || null
  const setFieldValue = (name, value) => {
    setForm((currentForm) => ({ ...currentForm, [name]: value }))
    if (errors[name]) setErrors((currentErrors) => ({ ...currentErrors, [name]: '' }))
  }

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target
    setFieldValue(name, type === 'checkbox' ? checked : value)
  }

  const handleBlur = (event) => {
    const fieldName = event.target.name
    setTouched((currentTouched) => ({ ...currentTouched, [fieldName]: true }))
    const fieldErrors = validate()
    setErrors((currentErrors) => ({ ...currentErrors, [fieldName]: fieldErrors[fieldName] || '' }))
  }

  const validate = () => {
    const nextErrors = {}
    const requiredFields = [
      ['fullName', 'Full name is required.'],
      ['gender', 'Please select a gender.'],
      ['mobileNumber', 'Mobile number is required.'],
      ['email', 'Email address is required.'],
      ['college', 'College or university name is required.'],
      ['course', 'Course or degree is required.'],
      ['branch', 'Branch or department is required.'],
      ['yearSemester', 'Please select your year or semester.'],
      ['rollNumber', 'Registration or roll number is required.'],
      ['selectedProgram', 'Please choose a program.'],
    ]

    requiredFields.forEach(([name, message]) => {
      if (!String(form[name]).trim()) nextErrors[name] = message
    })

    if (form.mobileNumber.trim() && !/^[6-9]\d{9}$/.test(form.mobileNumber.replace(/\D/g, ''))) nextErrors.mobileNumber = 'Enter a valid 10-digit Indian mobile number.'
    if (form.whatsappNumber.trim() && !/^[6-9]\d{9}$/.test(form.whatsappNumber.replace(/\D/g, ''))) nextErrors.whatsappNumber = 'Enter a valid 10-digit WhatsApp number.'
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Enter a valid email address.'
    if (!form.confirmation) nextErrors.confirmation = 'Please confirm that your information is correct.'

    return nextErrors
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (isSubmitting) return
    const nextErrors = validate()
    setErrors(nextErrors)
    setTouched(Object.keys(nextErrors).reduce((result, key) => ({ ...result, [key]: true }), {}))

    const firstInvalidField = Object.keys(nextErrors)[0]
    if (firstInvalidField) {
      fieldRefs.current[firstInvalidField]?.focus()
      return
    }

    setSubmissionError('')
    setIsSubmitting(true)

    try {
      const result = await submitApplication({ ...form, program: selectedProgram })
      setApplicationId(result.applicationId)
      setIsSubmitted(true)
    } catch (error) {
      setSubmissionError(error.message || 'Unable to submit your application right now. Please check your connection and try again.')
      if (import.meta.env.DEV) console.error('Application submission failed:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return <main className="min-h-[calc(100svh-72px)] bg-slate-950 px-5 py-16 text-white sm:px-8 lg:px-10"><div className="mx-auto max-w-5xl"><SuccessMessage applicationId={applicationId} /></div></main>
  }

  return (
    <main className="min-h-screen bg-slate-950 px-5 py-12 text-white sm:px-8 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-5xl">
        <a href="/#programs" className="text-sm font-medium text-slate-400 transition-colors hover:text-indigo-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400">Back to Programs</a>
        <div className="mt-8 max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo-300">Nova Rise Applications</p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">Apply for a Program</h1>
          <p className="mt-4 text-base leading-7 text-slate-400">Complete the details below to submit your interest in a Nova Rise online program.</p>
        </div>

        <ol className="mt-8 grid grid-cols-2 gap-2 border-y border-slate-800 py-4 text-xs text-slate-500 sm:grid-cols-4 sm:gap-4">
          {['Personal', 'Academic', 'Program', 'Confirmation'].map((step, index) => <li key={step} className="flex items-center gap-2"><span className="flex h-6 w-6 items-center justify-center rounded-full border border-indigo-400/35 bg-indigo-400/10 font-semibold text-indigo-300">{index + 1}</span>{step}</li>)}
        </ol>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
          <FormSection icon={User} title="Personal Details" description="Tell us a little about yourself.">
            <div className="grid gap-5 sm:grid-cols-2">
              <FormField id="fullName" label="Full Name" required error={touched.fullName ? errors.fullName : ''} className="sm:col-span-2"><input ref={(element) => { fieldRefs.current.fullName = element }} id="fullName" name="fullName" value={form.fullName} onChange={handleChange} onBlur={handleBlur} placeholder="Enter your full name" required aria-invalid={Boolean(errors.fullName)} aria-describedby={errors.fullName ? 'fullName-error' : undefined} className={inputClass} /></FormField>
              <FormField id="gender" label="Gender" required error={touched.gender ? errors.gender : ''}><select ref={(element) => { fieldRefs.current.gender = element }} id="gender" name="gender" value={form.gender} onChange={handleChange} onBlur={handleBlur} required aria-invalid={Boolean(errors.gender)} className={selectClass}><option value="">Select gender</option>{genderOptions.map((option) => <option key={option}>{option}</option>)}</select></FormField>
              <FormField id="dateOfBirth" label="Date of Birth"><input id="dateOfBirth" name="dateOfBirth" type="date" value={form.dateOfBirth} onChange={handleChange} className={inputClass} /></FormField>
              <FormField id="mobileNumber" label="Mobile Number" required error={touched.mobileNumber ? errors.mobileNumber : ''}><input ref={(element) => { fieldRefs.current.mobileNumber = element }} id="mobileNumber" name="mobileNumber" type="tel" value={form.mobileNumber} onChange={handleChange} onBlur={handleBlur} placeholder="Enter 10-digit mobile number" inputMode="numeric" required aria-invalid={Boolean(errors.mobileNumber)} aria-describedby={errors.mobileNumber ? 'mobileNumber-error' : undefined} className={inputClass} /></FormField>
              <FormField id="whatsappNumber" label="WhatsApp Number" error={touched.whatsappNumber ? errors.whatsappNumber : ''}><input ref={(element) => { fieldRefs.current.whatsappNumber = element }} id="whatsappNumber" name="whatsappNumber" type="tel" value={form.whatsappNumber} onChange={handleChange} onBlur={handleBlur} placeholder="Enter WhatsApp number if different" inputMode="numeric" aria-invalid={Boolean(errors.whatsappNumber)} className={inputClass} /></FormField>
              <FormField id="email" label="Email Address" required error={touched.email ? errors.email : ''} className="sm:col-span-2"><input ref={(element) => { fieldRefs.current.email = element }} id="email" name="email" type="email" value={form.email} onChange={handleChange} onBlur={handleBlur} placeholder="you@example.com" autoComplete="email" required aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} className={inputClass} /></FormField>
            </div>
          </FormSection>

          <FormSection icon={GraduationCap} title="Academic Details" description="Share your current academic background.">
            <div className="grid gap-5 sm:grid-cols-2">
              {[['college', 'College / University Name', 'Enter your college or university'], ['course', 'Course / Degree', 'e.g. B.Tech, BCA, MCA'], ['branch', 'Branch / Department', 'e.g. Computer Science'], ['rollNumber', 'Registration / Roll Number', 'Enter your registration or roll number']].map(([name, label, placeholder]) => <FormField key={name} id={name} label={label} required error={touched[name] ? errors[name] : ''}><input ref={(element) => { fieldRefs.current[name] = element }} id={name} name={name} value={form[name]} onChange={handleChange} onBlur={handleBlur} placeholder={placeholder} required aria-invalid={Boolean(errors[name])} className={inputClass} /></FormField>)}
              <FormField id="yearSemester" label="Year / Semester" required error={touched.yearSemester ? errors.yearSemester : ''}><select ref={(element) => { fieldRefs.current.yearSemester = element }} id="yearSemester" name="yearSemester" value={form.yearSemester} onChange={handleChange} onBlur={handleBlur} required aria-invalid={Boolean(errors.yearSemester)} className={selectClass}><option value="">Select year or semester</option>{yearOptions.map((option) => <option key={option}>{option}</option>)}</select></FormField>
            </div>
          </FormSection>

          <FormSection icon={Layers} title="Program Details" description="Your selected program and online learning mode.">
            <ProgramSummary program={selectedProgram} programs={programs} error={touched.selectedProgram ? errors.selectedProgram : ''} selectRef={(element) => { fieldRefs.current.selectedProgram = element }} onChange={(event) => { setFieldValue('selectedProgram', event.target.value); setTouched((currentTouched) => ({ ...currentTouched, selectedProgram: true })) }} />
          </FormSection>

          <FormSection icon={FileCheck} title="Additional Information" description="Optional context to help us understand your goals.">
            <div className="grid gap-5 sm:grid-cols-2"><FormField id="referralSource" label="How did you hear about us?"><select id="referralSource" name="referralSource" value={form.referralSource} onChange={handleChange} className={selectClass}><option value="">Select an option</option>{referralOptions.map((option) => <option key={option}>{option}</option>)}</select></FormField><FormField id="message" label="Additional Message / Questions" className="sm:col-span-2"><textarea id="message" name="message" value={form.message} onChange={handleChange} rows="4" className={`${inputClass} py-3`} /></FormField></div>
          </FormSection>

          <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 sm:p-7"><label className="flex items-start gap-3 text-sm leading-6 text-slate-300"><input ref={(element) => { fieldRefs.current.confirmation = element }} type="checkbox" name="confirmation" checked={form.confirmation} onChange={handleChange} className="mt-1 h-4 w-4 rounded border border-slate-700 bg-slate-950 text-indigo-500 focus:ring-indigo-400" /><span>I confirm that the information provided by me is correct.</span></label>{touched.confirmation && errors.confirmation && <p className="mt-2 text-xs text-rose-400" role="alert">{errors.confirmation}</p>}<p className="mt-4 text-xs leading-5 text-slate-500">By submitting this form, you agree that Nova Rise may use the provided information to contact you regarding your program application.</p>{submissionError && <p className="mt-4 text-sm leading-6 text-rose-400" role="alert">{submissionError}</p>}<button type="submit" disabled={isSubmitting} className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-indigo-500 px-5 text-sm font-semibold text-white transition-colors hover:bg-indigo-400 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 sm:w-auto">{isSubmitting ? 'Submitting Application...' : 'Submit Application'}<Send size={16} aria-hidden="true" /></button></section>
        </form>
      </div>
    </main>
  )
}

export default ApplicationPage