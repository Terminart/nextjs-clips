import { atom } from 'recoil'

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
})
