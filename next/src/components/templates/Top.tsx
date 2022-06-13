import { Box, useBreakpointValue, VStack } from '@chakra-ui/react'
import { CircleLink } from '@/components/atoms/CircleLink'

export const Top = () => {
  return useBreakpointValue({ base: <SP />, md: <PC /> }) || <PC />
}

const PC = () => {
  const baseLength = { base: 700, lg: 800 }

  return (
    <Box
      pos={'relative'}
      w={baseLength}
      h={baseLength}
      mx={'auto'}
      mt={'100px'}
    >
      <CircleLink title={'Gallery'} mx={'auto'} />
      <CircleLink title={'Motion'} pos={'absolute'} left={0} bottom={'5em'} />
      <CircleLink
        title={'Integration'}
        pos={'absolute'}
        right={0}
        bottom={'5em'}
      />
    </Box>
  )
}

const SP = () => {
  return (
    <VStack spacing={8} mt={'40px'}>
      <CircleLink title={'Gallery'} />
      <CircleLink title={'Motion'} />
      <CircleLink title={'Integration'} />
    </VStack>
  )
}
