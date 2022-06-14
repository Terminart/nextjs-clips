import { Box, SquareProps, useBreakpointValue, VStack } from '@chakra-ui/react'
import { CircleLink } from '@/components/atoms/CircleLink'

export const Top = () => {
  return useBreakpointValue({ base: <SP />, md: <PC /> }) || <PC />
}

const PC = () => {
  const sideLength = { base: 700, lg: 800 }

  return (
    <Box
      pos={'relative'}
      w={sideLength}
      h={sideLength}
      mx={'auto'}
      mt={'100px'}
    >
      <Gallery mx={'auto'} />
      <Motion pos={'absolute'} left={0} bottom={'5em'} />
      <Integration pos={'absolute'} right={0} bottom={'5em'} />
    </Box>
  )
}

const SP = () => {
  return (
    <VStack spacing={8} mt={'40px'}>
      <Gallery />
      <Motion />
      <Integration />
    </VStack>
  )
}

const Gallery = (props: SquareProps) => (
  <CircleLink title={'Gallery'} image={'/gallery.jpg'} {...props} />
)
const Motion = (props: SquareProps) => (
  <CircleLink title={'Motion'} image={'/motion.jpg'} {...props} />
)
const Integration = (props: SquareProps) => (
  <CircleLink title={'Integration'} image={'/integration.jpg'} {...props} />
)
