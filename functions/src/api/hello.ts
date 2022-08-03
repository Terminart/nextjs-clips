import * as functions from 'firebase-functions'
import { aaa } from '../lib/libSample'

export const world = functions.https.onCall(() => {
  const a = aaa()
  console.log(a)
  return 'hello world.'
})
