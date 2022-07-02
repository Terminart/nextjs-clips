import { DefaultLayout } from '@/components/layouts/DefaultLayout'
import { ReactNode } from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'

type Props = {
  children: ReactNode
}

export const FormLayout = ({ children }: Props) => {
  return (
    <DefaultLayout mx={'auto'} my={20}>
      <Box
        w={{ base: 300, md: 680 }}
        border={'2px solid'}
        borderColor={useColorModeValue('gray.400', 'palegreen.500')}
        borderRadius={'xl'}
        my={20}
        mx={'auto'}
        p={8}
      >
        {children}
      </Box>
    </DefaultLayout>
  )
}
