import * as admin from 'firebase-admin'
import * as functions from 'firebase-functions'
import { firestore } from 'firebase-admin'
import Timestamp = firestore.Timestamp
import { News } from '../types/news'
import { FIRESTORE_COLLECTIONS } from '../constants/collection'

export const create = functions.https.onCall(
  async (request: Pick<News, 'title' | 'text'>) => {
    await admin
      .firestore()
      .collection(FIRESTORE_COLLECTIONS.NEWS)
      .doc()
      .create({
        title: request.title,
        text: request.text,
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
  }
)
