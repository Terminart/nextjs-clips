import * as functions from 'firebase-functions'
import { aaa } from '../lib/test'

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onCall(() => {
  const a = aaa()
  console.log(a)
  return 'hello world.'
})
