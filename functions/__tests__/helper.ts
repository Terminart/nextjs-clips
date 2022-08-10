import test = require('firebase-functions-test')
import { firestore } from 'firebase-admin'
import Timestamp = firestore.Timestamp

export const wrap = test({
  projectId: process.env.FIREBASE_PROJECT_ID,
}).wrap

export const initialTime = () => {
  return Timestamp.fromDate(new Date('2022/01/01'))
}

export const sleep = (milliseconds: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds)
  })
}
