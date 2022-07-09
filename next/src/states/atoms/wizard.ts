import { atom } from 'recoil'

type Wiz = {
  second: string
  third: string
  fourth: string
}

export const wizAtom = atom<Wiz>({
  key: 'wiz',
  default: {
    second: '',
    third: '',
    fourth: '',
  },
})
