import { Box, Center, Image, Text, useColorModeValue } from '@chakra-ui/react'

export type SquareLinkProps = {
  href: string
  image: string
  title: string
}

export const SquareLink = ({ image, title }: SquareLinkProps) => {
  return (
    <Box
      pos={'relative'}
      h={'300px'}
      borderRadius={'30px'}
      border={'2px solid'}
      borderColor={useColorModeValue('gray.400', 'palegreen.700')}
      _hover={{
        boxShadow: useColorModeValue('dark-lg', 'palegreen.700.highSpread'),
      }}
      overflow={'hidden'}
    >
      <Center w={'full'} h={'full'} pos={'absolute'}>
        <Text
          w={'full'}
          textAlign={'center'}
          bg={useColorModeValue('whiteAlpha.700', 'blackAlpha.700')}
          fontSize={32}
          zIndex={'docked'}
          py={2}
        >
          {title}
        </Text>
      </Center>
      <Image
        src={image}
        w={'full'}
        h={'full'}
        fit={'cover'}
        filter={'blur(1.2px)'}
        alt={'link image'}
      />
    </Box>
  )
}
