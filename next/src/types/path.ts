import { RecursiveValueOf } from '@/types/util'

export const path = {
  home: '/',
  gallery: {
    index: '/gallery',
    tab: '/gallery/tab',
    group: '/gallery/group',
    carousel: '/gallery/carousel',
    step: '/gallery/step',
  },
  motion: {
    index: '/motion',
    parallax: '/motion/parallax',
    slide: '/motion/slide',
  },
  integration: {
    index: '/integration',
    wizard: {
      index: '/integration/wizard',
      first: '/integration/wizard/first',
      second: '/integration/wizard/second',
      third: '/integration/wizard/third',
      fourth: '/integration/wizard/fourth',
      fifth: '/integration/wizard/fifth',
    },
  },
  login: '/login',
  signup: '/signup',
} as const

export type Path = RecursiveValueOf<typeof path>
export type Subdirectory = keyof typeof path
