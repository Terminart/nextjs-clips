import { Timestamp } from '@firebase/firestore'

export type News = {
  id: string
  title: string
  text: string
  createdAt: Timestamp
  updatedAt: Timestamp
}
