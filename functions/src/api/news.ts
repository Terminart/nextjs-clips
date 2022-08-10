import * as admin from 'firebase-admin'
import { firestore } from 'firebase-admin'
import * as functions from 'firebase-functions'
import { News } from '../types/news'
import { FIRESTORE_COLLECTIONS } from '../constants/collection'
import _ from 'lodash'
import Timestamp = firestore.Timestamp

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

export const update = functions.https.onCall(
  async (request: Pick<News, 'id' | 'title' | 'text'>) => {
    const data = _.omitBy(
      {
        title: request.title,
        text: request.text,
        updatedAt: Timestamp.now(),
      },
      _.isNil
    )

    await admin
      .firestore()
      .collection(FIRESTORE_COLLECTIONS.NEWS)
      .doc(request.id)
      .update(data)
      .catch((error) => {
        throw new functions.https.HttpsError(
          'internal',
          `failed to update document "news"`,
          error
        )
      })
  }
)
