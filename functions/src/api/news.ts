import * as admin from 'firebase-admin'
import * as functions from 'firebase-functions'

export const create = functions.https.onCall(async () => {
  await admin.firestore().collection('news').doc('test').set({ a: 1, b: 2 })
  return 'news create'
})
