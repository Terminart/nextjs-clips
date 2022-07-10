import { Box, Heading } from '@chakra-ui/react'

type Props = {
  title: string
}

export const PageTitle = ({ title }: Props) => {
  return (
    <Box mb={8}>
      <Heading mb={4}>{title}</Heading>
    </Box>
  )
}
