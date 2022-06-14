import { Center, Circle, Divider, SquareProps, Text } from '@chakra-ui/react'
import Image from 'next/image'

type Props = SquareProps & {
  title: string
  image?: string
}

export function CircleLink({ title, image, ...props }: Props) {
  return (
    <Circle
      pos={'relative'}
      size={{ base: '14em', md: '18em' }}
      border={'3px solid'}
      borderColor={'palegreen.500'} // TODO: Color mode
      overflow={'hidden'}
      _hover={{
        boxShadow: '0px 0px 6px 3px #00FFA3',
      }}
      {...props}
      sx={{
        img: {
          filter: 'blur(1px)',
        },
      }}
    >
      {image && (
        <Image
          src={image}
          layout={'fill'}
          objectFit={'cover'}
          alt={'link image'}
        />
      )}
      <Divider
        pos={'absolute'}
        bottom={'25%'}
        borderColor={'palegreen.500'}
        borderTopWidth={'2px'}
        opacity={0.9}
      />
      <Center
        pos={'absolute'}
        w={'full'}
        h={'25%'}
        bottom={0}
        bg={'blackAlpha.700'}
      >
        <Text
          pos={'absolute'}
          color={'white'}
          fontSize={{ base: '1.4em', md: '1.8em' }}
          top={'10%'}
          userSelect={'none'}
        >
          {title}
        </Text>
      </Center>
    </Circle>
  )
}
