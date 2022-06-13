import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'

export const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bgColor: mode('white', 'gray.800')(props),
    },
  }),
}
