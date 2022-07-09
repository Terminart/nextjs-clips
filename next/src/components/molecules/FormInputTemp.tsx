import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react'
import { Field } from 'formik'

type Props = {
  id: string
  label: string
  type?: 'text' | 'password'
  error?: string
  touched?: boolean
  isRequired?: boolean
}

export const FormInputTemp = ({
  id,
  label,
  type,
  error,
  touched,
  isRequired,
}: Props) => {
  return (
    <FormControl isInvalid={!!error && touched} isRequired={isRequired}>
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
      />
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  )
}
