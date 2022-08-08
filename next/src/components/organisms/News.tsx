import {
  Box,
  Divider,
  Heading,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import { genLoremIpsum } from '@/lib/lorem'

export const News = () => {
  const color = useColorModeValue('gray.300', 'gray.500')

  return (
    <Box>
      <VStack spacing={0} divider={<Divider borderColor={color} />}>
        {[...Array(5)].map((v, i) => (
          <Temp key={i} />
        ))}
      </VStack>
    </Box>
  )
}

const Temp = () => {
  const color = useColorModeValue('blackAlpha.100', 'whiteAlpha.200')

  return (
    <VStack align={'baseline'} cursor={'pointer'} _hover={{ bg: color }} py={4}>
      <Heading size={'sm'} textDecoration={'underline'}>
        お知らせ
      </Heading>
      <Text px={3} py={1} noOfLines={2}>
        {genLoremIpsum(3)}
      </Text>
    </VStack>
  )
}
