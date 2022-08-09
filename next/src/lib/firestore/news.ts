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
} from '@firebase/firestore'

export type News = {
  id: string
  title: string
  text: string
  tag: string[]
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
      tag: data.tag,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    }
  },
}

export const getAllNews = async (): Promise<News[]> => {
  return getDocs(collection(getFirestore(), 'news').withConverter(converter))
    .then((snapshots) => {
      return snapshots.docs.map((v) => v.data())
    })
    .catch((error) => {
      console.error(error)
      return []
    })
}
