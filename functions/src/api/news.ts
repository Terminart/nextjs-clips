// import * as admin from 'firebase-admin'
import * as functions from 'firebase-functions'

// import serviceAccount from '../../serviceAccountKey.json'
// import { ServiceAccount } from 'firebase-admin/lib/app/credential'
// admin.initializeApp({
//   // credential: admin.credential.applicationDefault(),
//   storageBucket: 'terminart-sample.appspot.com',
// })

export const create = functions.https.onCall(async () => {
  // admin.initializeApp()
  // await admin.firestore().collection('news').doc('test').set({ a: 1, b: 2 })
  return 'news create'
})
