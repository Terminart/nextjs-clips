import { firestore } from 'firebase-admin'
import Timestamp = firestore.Timestamp

export type News = {
  id: string
  title: string
  text: string
  createdAt: Timestamp
  updatedAt: Timestamp
}
