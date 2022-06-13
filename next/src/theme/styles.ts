import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'

export const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bgColor: mode('white', 'black.500')(props),
      h: '100vh',
    },
    '#__next': {
      display: 'flex',
      flexDir: 'column',
      h: 'full',
    },
  }),
}
