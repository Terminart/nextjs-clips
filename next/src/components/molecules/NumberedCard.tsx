import {
  Badge,
  Center,
  Heading,
  HStack,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'

export type NumberedCardProps = {
  number: number
  title: string
  text: string
  badges: string[]
}

export const NumberedCard = ({
  number,
  title,
  text,
  badges,
}: NumberedCardProps) => {
  const colors = {
    border: useColorModeValue('gray.300', 'palegreen.700'),
    left: useColorModeValue('gray.200', 'palegreen.700'),
    right: useColorModeValue('white', 'gray.600'),
    badge: useColorModeValue('gray', 'teal'),
  }

  return (
    <HStack
      w={{ base: '280px', sm: '350px' }}
      h={'150px'}
      border={'2px solid'}
      borderColor={colors.border}
      borderRadius={'lg'}
      overflow={'hidden'}
      spacing={0}
    >
      <Center bg={colors.left} h={'full'} flexBasis={'30%'}>
        <Text fontSize={50}>{number}</Text>
      </Center>
      <VStack
        bg={colors.right}
        h={'full'}
        align={'baseline'}
        justify={'space-between'}
        p={4}
        flexBasis={'70%'}
      >
        <Heading noOfLines={1}>{title}</Heading>
        <Text noOfLines={1}>{text}</Text>
        <HStack
          display={'-webkit-box'}
          overflow={'hidden'}
          textOverflow={'ellipsis'}
          sx={{ '-webkit-box-orient': 'vertical', '-webkit-line-clamp': '1' }}
        >
          {badges.map((v, i) => (
            <Badge key={i} colorScheme={colors.badge} variant={'solid'}>
              {v}
            </Badge>
          ))}
        </HStack>
      </VStack>
    </HStack>
  )
}
