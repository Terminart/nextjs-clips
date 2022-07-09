import { Box, FormLabel, Input, InputProps, Text } from '@chakra-ui/react'
import { Field } from 'formik'

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

type Props2 = {
  id: string
  label: string
  type?: 'text' | 'password'
}

export const FormInput2 = ({ id, label, type = 'text' }: Props2) => {
  return (
    <>
      <FormLabel htmlFor={id} fontSize={20}>
        {label}
      </FormLabel>
      <Field
        as={Input}
        id={id}
        name={id}
        type={type}
        w={'full'}
        mt={2}
        variant={'underline'}
        validate={(value: string) => (value.length > 5 ? 'error' : '')}
      />
    </>
  )
}
