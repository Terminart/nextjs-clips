import {
  collection,
  DocumentData,
  FirestoreDataConverter,
  getDocs,
  getFirestore,
  QueryDocumentSnapshot,
  SnapshotOptions,
  Timestamp,
  WithFieldValue,
  query,
  orderBy,
  limit,
  startAfter,
} from '@firebase/firestore'
import { News } from '@/types/news'
import { FIRESTORE_COLLECTIONS } from '@/constants/collection'

const converter: FirestoreDataConverter<News> = {
  toFirestore(modelObject: WithFieldValue<News>): DocumentData {
    return modelObject
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot<News>,
    options?: SnapshotOptions
  ): News {
    const data = snapshot.data(options)

    return {
      id: snapshot.id,
      title: data.title,
      text: data.text,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    }
  },
}

export const getAllNews = async (
  after = Timestamp.now(),
  rows = 10
): Promise<News[]> => {
  return getDocs(
    query(
      collection(getFirestore(), FIRESTORE_COLLECTIONS.NEWS).withConverter(
        converter
      ),
      orderBy('createdAt', 'desc'),
      limit(rows),
      startAfter(after)
    )
  )
    .then((snapshots) => {
      return snapshots.docs.map((v) => v.data())
    })
    .catch((error) => {
      console.error(error)
      return []
    })
}
