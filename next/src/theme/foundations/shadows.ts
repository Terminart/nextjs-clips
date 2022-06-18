import { colors } from '@/theme/foundations/colors'

export const shadows = {
  palegreen: {
    500: {
      blur: `0px 3px 3px 0.5px ${colors.palegreen['500']}`,
      focusLine: `0px 2px 0px 0px ${colors.palegreen['500']}`,
    },
    700: {
      spread: `0px 0px 5px 2px ${colors.palegreen['700']}`,
      highSpread: `0px 0px 8px 6px ${colors.palegreen['700']}`,
    },
  },
  black: {
    focusLine: `0px 1.5px 0px 0px black`,
  },
}
