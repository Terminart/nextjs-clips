import { atom } from 'recoil'

type WizardInputs = {
  second: string
  third: string
  fourth: string
}

export const wizardInputsAtom = atom<WizardInputs>({
  key: 'WizardInputs',
  default: {
    second: '',
    third: '',
    fourth: '',
  },
})
