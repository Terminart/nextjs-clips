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

export type News = {
  id: string
  title: string
  text: string
  createdAt: Timestamp
  updatedAt: Timestamp
}

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
      collection(getFirestore(), 'news').withConverter(converter),
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
