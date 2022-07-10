import { atom } from 'recoil'
import Router from 'next/router'
import _ from 'lodash'

export type WizardInputs = {
  name: string
  age: number
  country?: string
}

export const wizardInputsAtom = atom<WizardInputs>({
  key: 'WizardInputs',
  default: {
    name: '',
    age: 0,
    country: undefined,
  },
  effects: [
    ({ resetSelf }) => {
      // TODO: atomを破棄できる機能が追加されたらリファクタリングする
      Router.events.on('routeChangeComplete', (path) => {
        if (!_.startsWith(path, '/integration/wizard')) {
          console.log('reset')
          resetSelf()
        }
      })
    },
  ],
})
