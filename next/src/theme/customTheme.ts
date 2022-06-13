import { extendTheme } from '@chakra-ui/react'
import { colors } from '@/theme/foundations/colors'
import { config } from '@/theme/config'
import { styles } from '@/theme/styles'
import { textStyles } from '@/theme/foundations/textStyles'
import { fonts } from '@/theme/foundations/fonts'
import { shadows } from '@/theme/foundations/shadows'
import { Button } from '@/theme/components/button'

const customTheme = extendTheme({
  colors,
  config,
  components: {
    Button,
  },
  fonts,
  shadows,
  styles,
  textStyles,
})

export default customTheme
