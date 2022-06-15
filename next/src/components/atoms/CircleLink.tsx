import {
  Center,
  Circle,
  Divider,
  Image,
  SquareProps,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

type Props = SquareProps & {
  title: string
  image?: string
}

export function CircleLink({ title, image, ...props }: Props) {
  const color = useColorModeValue('gray.300', 'palegreen.700')

  return (
    <Circle
      pos={'relative'}
      size={{ base: '14em', md: '18em' }}
      border={'3px solid'}
      borderColor={color}
      overflow={'hidden'}
      boxShadow={useColorModeValue('base', 'palegreen.700.spread')}
      _hover={{
        boxShadow: useColorModeValue('dark-lg', 'palegreen.700.highSpread'),
      }}
      role={'group'}
      {...props}
    >
      {image && (
        <Image
          src={image}
          h={'full'}
          fit={'cover'}
          filter={'blur(1.2px)'}
          alt={'link image'}
        />
      )}
      <Divider
        pos={'absolute'}
        bottom={'25%'}
        borderColor={color}
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
            color,
          }}
        >
          {title}
        </Text>
      </Center>
    </Circle>
  )
}
