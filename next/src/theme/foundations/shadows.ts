import { colors } from '@/theme/foundations/colors'

export const shadows = {
  palegreen: {
    500: {
      blur: `0px 3px 3px 0.5px ${colors.palegreen['500']}`,
    },
    700: {
      spread: `0px 0px 5px 2px ${colors.palegreen['700']}`,
      highSpread: `0px 0px 8px 6px ${colors.palegreen['700']}`,
    },
  },
}
