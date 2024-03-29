import { getApps, initializeApp } from 'firebase/app'
import { connectFirestoreEmulator, getFirestore } from '@firebase/firestore'
import { connectFunctionsEmulator, getFunctions } from '@firebase/functions'
import { connectAuthEmulator, getAuth } from '@firebase/auth'

if (!getApps().length) {
  initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  })

  if (process.env.NODE_ENV === 'development') {
    connectFirestoreEmulator(
      getFirestore(),
      'localhost',
      Number(process.env.NEXT_PUBLIC_FIREBASE_FIRESTORE_EMULATOR_PORT)
    )

    connectFunctionsEmulator(
      getFunctions(),
      'localhost',
      Number(process.env.NEXT_PUBLIC_FIREBASE_FUNCTIONS_EMULATOR_PORT)
    )

    connectAuthEmulator(
      getAuth(),
      `http://localhost:${process.env.NEXT_PUBLIC_FIREBASE_AUTH_EMULATOR_PORT}`
    )
  }
}
