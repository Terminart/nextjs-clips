import { Circle, Divider, SquareProps, Text } from '@chakra-ui/react'

type Props = SquareProps & {
  title: string
}

export function CircleLink({ title, ...props }: Props) {
  return (
    <Circle
      pos={'relative'}
      bg={'black.300'} // TODO: カラーモード対応
      size={{ base: '14em', md: '18em' }}
      border={'3px solid'}
      borderColor={'palegreen.500'} // TODO: Color mode
      overflow={'hidden'}
      _hover={{
        bg: 'black.200',
        boxShadow: '0px 0px 6px 3px #00FFA3',
      }}
      {...props}
    >
      <Divider
        pos={'absolute'}
        bottom={'25%'}
        borderColor={'palegreen.500'}
        borderTopWidth={'2px'}
        opacity={0.9}
      />
      <Text
        pos={'absolute'}
        bottom={'7%'}
        color={'white'} // TODO: color mode
        fontSize={{ base: '1.4em', md: '1.8em' }}
        userSelect={'none'}
      >
        {title}
      </Text>
    </Circle>
  )
}
