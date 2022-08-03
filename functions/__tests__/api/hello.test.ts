import test = require('firebase-functions-test')
import { api } from '../../src/index'

const wrap = test().wrap

describe('test', () => {
  it('should be success', async function () {
    const result = await wrap(api.hello.world)(null)
    expect(result).toBe('hello world.')
  })
})
