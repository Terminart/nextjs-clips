import { Box } from '@chakra-ui/layout'
import { BoxProps, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export type ImageCardProps = BoxProps & {
  title: string
  text: string
  imageSrc: string
}

export const ImageCard = ({
  title,
  text,
  imageSrc,
  ...props
}: ImageCardProps) => {
  return (
    <Box
      h={'300px'}
      borderRadius={20}
      bgImage={imageSrc}
      bgSize={'cover'}
      bgPosition={'center'}
      bgRepeat="no-repeat"
      dropShadow={'0px 4px 10px rgba(0, 0, 0, 0.05)'}
      overflow={'hidden'}
      {...props}
    >
      <Box w={'full'} h={'50%'} top={'70%'} pos={'relative'} color={'white'}>
        <Heading fontSize={26} pl={5} noOfLines={1}>
          {title}
        </Heading>
        <Text px={5} noOfLines={2} fontSize={16}>
          {text}
        </Text>
      </Box>
    </Box>
  )
}
