import { Box, Divider, Heading, useColorModeValue } from '@chakra-ui/react'

type Props = {
  title: string
}

export const PageTitle = ({ title }: Props) => {
  return (
    <Box mb={8}>
      <Heading mb={4}>{title}</Heading>
      <Divider borderColor={useColorModeValue('gray.400', 'palegreen.500')} />
    </Box>
  )
}
