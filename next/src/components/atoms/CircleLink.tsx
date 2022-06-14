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
      borderColor={'palegreen.700'} // TODO: Color mode
      overflow={'hidden'}
      boxShadow={'palegreen.700.spread'}
      _hover={{
        boxShadow: 'palegreen.700.highSpread',
      }}
      sx={{
        img: {
          filter: 'blur(1.7px)',
        },
      }}
      role={'group'}
      {...props}
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
        borderColor={'palegreen.700'}
        borderTopWidth={'1px'}
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
          _groupHover={{
            color: 'palegreen.700',
          }}
        >
          {title}
        </Text>
      </Center>
    </Circle>
  )
}
