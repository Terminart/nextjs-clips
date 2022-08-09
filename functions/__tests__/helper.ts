import test = require('firebase-functions-test')

export const wrap = test({
  projectId: process.env.FIREBASE_PROJECT_ID,
}).wrap
