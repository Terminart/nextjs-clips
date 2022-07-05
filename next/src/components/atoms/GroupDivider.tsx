import { Box, Divider, HStack, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

interface Props {
  title: string
}

export const GroupDivider = ({ title }: Props) => {
  const color = useColorModeValue('gray.400', 'palegreen.700')

  return (
    <HStack spacing={0} mt={10} mb={5}>
      <Box
        bg={color}
        borderRadius={'12px'}
        fontSize={'12px'}
        display={'inline-block'}
        px={'16px'}
        py={'4px'}
      >
        <Text color={'white'}>{title}</Text>
      </Box>
      <Divider borderColor={color} />
    </HStack>
  )
}
