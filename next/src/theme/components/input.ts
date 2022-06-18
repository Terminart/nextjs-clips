import { mode } from '@chakra-ui/theme-tools'
import { ComponentStyleConfig } from '@chakra-ui/react'

export const Input: ComponentStyleConfig = {
  variants: {
    underline: (props) => ({
      field: {
        borderBottom: '1px solid',
        borderColor: mode('gray.400', 'palegreen.700')(props),
        borderRadius: 0,
        px: 2,
        bg: 'transparent',
        _readOnly: {
          boxShadow: 'none !important',
          userSelect: 'all',
        },
        _invalid: {
          borderColor: mode('red.500', 'red.300')(props),
          boxShadow: `0px 1px 0px 0px ${mode('red.500', 'red.300')(props)}`,
        },
        _focusVisible: {
          borderColor: mode('gray.400', 'palegreen.500')(props),
          boxShadow: mode('black.focusLine', 'palegreen.500.focusLine')(props),
        },
      },
    }),
  },
}
