import { ComponentStyleConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: 'full',
  },
  variants: {
    default: (props) => ({
      bg: mode('gray.100', 'teal.500')(props),
      _hover: {
        bg: mode('gray.200', 'teal.600')(props),
        _disabled: {
          bg: mode('gray.100', 'teal.500')(props),
        },
      },
      _active: {
        bg: mode(`gray.300`, `teal.700`)(props),
      },
    }),
  },
  sizes: {
    xl: {
      h: '56px',
      minW: '200px',
      fontSize: '18px',
    },
  },
  defaultProps: {
    size: 'xl',
    variant: 'default',
  },
}
