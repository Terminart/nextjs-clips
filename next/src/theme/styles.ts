import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'

export const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bgColor: mode('white', 'black.500')(props),
    },
    '#__next': {
      bgColor: 'inherit',
    },
  }),
}
