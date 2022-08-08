import test = require('firebase-functions-test')
import { api } from '../../src/index'

const wrap = test().wrap

describe('test', () => {
  it('should be success', async function () {
    const result = await wrap(api.news.create)(null)
    expect(result).toBe('news create')
  })
})
