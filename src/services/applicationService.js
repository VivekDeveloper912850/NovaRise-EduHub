import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db, isFirebaseConfigured } from './firebase'

function createApplicationId() {
  const uniquePart = typeof globalThis.crypto?.randomUUID === 'function'
    ? globalThis.crypto.randomUUID().replace(/-/g, '').slice(0, 8)
    : Math.random().toString(16).slice(2, 10)

  return `NR-2026-${uniquePart.toUpperCase()}`
}

export async function submitApplication({
  fullName,
  gender,
  dateOfBirth,
  mobileNumber,
  whatsappNumber,
  email,
  college,
  course,
  branch,
  rollNumber,
  yearSemester,
  selectedProgram,
  referralSource,
  message,
  program,
}) {
  if (!isFirebaseConfigured()) {
    throw new Error('Firebase is not configured. Add the Firebase web configuration to .env.local.')
  }

  const applicationId = createApplicationId()
  const application = {
    applicationId,
    fullName,
    gender,
    dateOfBirth,
    mobileNumber,
    whatsappNumber,
    email,
    collegeName: college,
    course,
    branch,
    registrationNumber: rollNumber,
    yearSemester,
    selectedProgram: program?.title || selectedProgram,
    domain: program?.category || '',
    mode: program?.mode || 'Online',
    learningType: program?.format || 'Project-Based',
    source: referralSource,
    additionalMessage: message,
    status: 'New',
    createdAt: serverTimestamp(),
  }

  try {
    const documentReference = await addDoc(collection(db, 'applications'), application)
    return { applicationId, documentId: documentReference.id }
  } catch (error) {
    throw new Error('Unable to submit your application right now. Please check your connection and try again.', { cause: error })
  }
}
