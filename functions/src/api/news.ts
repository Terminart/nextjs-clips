import * as admin from 'firebase-admin'
import * as functions from 'firebase-functions'
import { firestore } from 'firebase-admin'
import Timestamp = firestore.Timestamp

// TODO: use common types
type News = {
  id: string
  title: string
  text: string
  tag: string[]
  createdAt: Timestamp
  updatedAt: Timestamp
}
type NewsRequest = Pick<News, 'title' | 'tag' | 'text'>

export const create = functions.https.onCall(async (request: NewsRequest) => {
  await admin
    .firestore()
    .collection('news') // TODO: use common constants
    .doc()
    .create({
      title: request.title,
      text: request.text,
      tag: request.tag,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    })
    .catch((error) => {
      throw new functions.https.HttpsError(
        'internal',
        'failed to create document "news"',
        error
      )
    })
})
