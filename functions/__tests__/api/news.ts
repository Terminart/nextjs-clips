import 'dotenv/config'
import { api } from '../../src/index'
import { wrap } from '../helper'

describe('api.news', () => {
  it('should be created without error', async function () {
    await expect(
      wrap(api.news.create)({
        title: 'title',
        text: 'text',
        tag: ['tag a', 'tag b'],
      })
    ).resolves.not.toThrowError()
  })

  it('should be thrown error', async function () {
    await expect(
      wrap(api.news.create)({
        title: undefined,
        text: 'text',
        tag: ['tag a', 'tag b'],
      })
    ).rejects.toThrowError()
  })
})