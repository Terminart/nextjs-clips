import { extendTheme } from '@chakra-ui/react'
import { colors } from '@/theme/colors'
import { styles } from '@/theme/styles'
import { textStyles } from '@/theme/textStyles'
import { fonts } from '@/theme/fonts'
import { Button } from '@/theme/components/button'

const customTheme = extendTheme({
  colors,
  components: {
    Button,
  },
  fonts,
  styles,
  textStyles,
})

export default customTheme
