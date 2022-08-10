import 'dotenv/config'
import { api } from '../../src/index'
import { initialTime, sleep, wrap } from '../helper'
import * as admin from 'firebase-admin'
import { FIRESTORE_COLLECTIONS } from '../../src/constants/collection'
import { News } from '../../src/types/news'
import _ = require('lodash')

describe('api.news', function () {
  describe('create', function () {
    it('should be created without error', async function () {
      await expect(
        wrap(api.news.create)({
          title: 'title',
          text: 'text',
        })
      ).resolves.not.toThrowError()
    })

    it('should be thrown error', async function () {
      await expect(
        wrap(api.news.create)({
          title: undefined,
          text: 'text',
        })
      ).rejects.toThrowError()
    })
  })

  describe('update', function () {
    const initData = {
      title: 'initialize title',
      text: 'initialize text',
      createdAt: initialTime(),
      updatedAt: initialTime(),
    }
    const doc = admin.firestore().collection(FIRESTORE_COLLECTIONS.NEWS).doc()
    const reset = async () => {
      await doc.set(initData)
      await sleep(300)
    }

    beforeEach(async function () {
      await reset()
    })

    it('should be updated all values without error', async function () {
      await expect(
        wrap(api.news.update)({
          id: doc.id,
          title: 'updated title',
          text: 'updated text',
        })
      ).resolves.not.toThrowError()

      const result = (await doc
        .get()
        .then((snapshot) => snapshot.data())) as News
      expect(result.title).toBe('updated title')
      expect(result.text).toBe('updated text')
      expect(result.createdAt.toMillis()).toBe(initialTime().toMillis())
      expect(result.updatedAt.toMillis()).toBeGreaterThan(
        initialTime().toMillis()
      )
    })

    it('should be updated each value without error', async function () {
      const data: Omit<News, 'id' | 'createdAt' | 'updatedAt'> = {
        title: 'updated title',
        text: 'updated text',
      }

      for (const [key, value] of Object.entries(data)) {
        // テストデータを初期化
        await reset()

        // 更新処理を実行
        await expect(
          wrap(api.news.update)({
            id: doc.id,
            [key]: value,
          })
        ).resolves.not.toThrowError()

        // 更新後の値を取得
        const result = (await doc
          .get()
          .then((snapshot) => snapshot.data())) as News

        // 対象プロパティと更新日時のみ変更されていることを確認する
        expect(_.get(result, key)).toBe(value)
        expect(result.updatedAt.toMillis()).toBeGreaterThan(
          initData.updatedAt.toMillis()
        )
        expect(_.omit(result, [key, 'updatedAt'])).toEqual(
          _.omit(initData, [key, 'updatedAt'])
        )
      }
    })
  })
})
