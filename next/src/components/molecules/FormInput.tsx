import { Box, Input, InputProps, Text } from '@chakra-ui/react'

type Props = InputProps & {
  label: string
  type?: 'text' | 'password'
}

export const FormInput = ({ label, type = 'text', ...props }: Props) => {
  return (
    <Box w={'full'}>
      <Text fontSize={20}>{label}</Text>
      <Input type={type} w={'full'} mt={2} variant={'underline'} {...props} />
    </Box>
  )
}
