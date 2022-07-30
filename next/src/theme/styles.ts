import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'

export const styles = {
  global: (props: StyleFunctionProps) => ({
    html: {
      height: 'full',
    },
    body: {
      bgColor: mode('white', 'black.500')(props),
      height: 'full',
    },
    '#__next': {
      display: 'flex',
      flexDirection: 'column',
      height: 'full',
      bgColor: 'inherit',
    },
    main: {
      flex: 1,
    },
  }),
}
