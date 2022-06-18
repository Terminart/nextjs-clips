import { Box, Input, Text } from '@chakra-ui/react'

type Props = {
  label: string
}

export const FormInput = ({ label }: Props) => {
  return (
    <Box w={'full'}>
      <Text fontSize={20}>{label}</Text>
      <Input w={'full'} mt={2} variant={'underline'} />
    </Box>
  )
}
