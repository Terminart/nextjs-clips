import {
  Heading,
  HStack,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import format from 'date-fns/format'

export type DateCardProps = {
  title: string
  text: string
  date: Date
}

export const DateCard = ({ title, text, date }: DateCardProps) => {
  return (
    <HStack
      w={{ base: '280px' }}
      h={'150px'}
      border={'2px solid'}
      borderColor={useColorModeValue('gray.300', 'purple.700')}
      borderRadius={'lg'}
      overflow={'hidden'}
      spacing={0}
    >
      <VStack
        bg={useColorModeValue('white', 'gray.600')}
        w={'full'}
        h={'full'}
        align={'baseline'}
        justify={'space-between'}
        p={4}
      >
        <Heading noOfLines={1}>{title}</Heading>
        <Text noOfLines={1}>{text}</Text>
        <Text w={'full'} textAlign={'end'}>
          {format(date, 'yyyy/MM/dd')}
        </Text>
      </VStack>
    </HStack>
  )
}
