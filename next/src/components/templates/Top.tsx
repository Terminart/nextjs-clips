import { Box, Circle, Divider, SquareProps, Text } from '@chakra-ui/react'

const x = 800
const point = (n: number) => `calc(${n}% - ${x / 8}px)`

// TODO: レスポンシブ対応してしまう
// TODO: 高さ、幅を計算し、top、left、rightの位置計算に用いる
export const Top = () => {
  return (
    <Box
      w={`${x}px`}
      h={`${x}px`}
      left={0}
      right={0}
      top={0}
      bottom={0}
      margin={'auto'}
      pos={'relative'}
    >
      <LinkCircle
        title={'Gallery'}
        left={0}
        right={0}
        mx={'auto'}
        top={point(25)}
      />
      <LinkCircle title={'Motion'} left={point(15)} top={point(75)} />
      <LinkCircle title={'Integration'} right={point(15)} top={point(75)} />
    </Box>
  )
}

type CircleProps = SquareProps & {
  title: string
}

const LinkCircle = ({ title, ...props }: CircleProps) => {
  return (
    <Circle
      bg={'black.300'}
      size={`${x / 3}px`}
      color={'black'}
      pos={'absolute'}
      border={'3px solid'}
      borderColor={'palegreen.500'}
      display={'flex'}
      flexDirection={'column'}
      _hover={{
        bg: 'black.200',
        boxShadow: '0px 0px 6px 3px #00FFA3',
      }}
      {...props}
    >
      <Divider
        borderColor={'palegreen.500'}
        opacity={0.9}
        pos={'absolute'}
        bottom={'25%'}
        w={'89%'}
        borderTopWidth={'2px'}
      />
      <Text pos={'absolute'} bottom={'7%'} color={'white'} fontSize={'25px'}>
        {title}
      </Text>
    </Circle>
  )
}
