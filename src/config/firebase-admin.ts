import { initializeApp, cert, getApps } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'
import { getFirestore } from 'firebase-admin/firestore'
import path from 'path'

if (!getApps().length) {
  // JSON 파일을 직접 사용하는 방법 (더 안전함)
  const serviceAccountPath = path.join(process.cwd(), 'firebase-service-account.json')
  
  initializeApp({
    credential: cert(serviceAccountPath)
  })
}

const adminAuth = getAuth()
const db = getFirestore()

export { adminAuth, db }
