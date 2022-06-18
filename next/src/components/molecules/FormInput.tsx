import { Box, Input, Text } from '@chakra-ui/react'

type Props = {
  label: string
  type?: 'text' | 'password'
}

export const FormInput = ({ label, type = 'text' }: Props) => {
  return (
    <Box w={'full'}>
      <Text fontSize={20}>{label}</Text>
      <Input type={type} w={'full'} mt={2} variant={'underline'} />
    </Box>
  )
}
