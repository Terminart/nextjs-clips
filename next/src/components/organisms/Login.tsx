import { Button, Center, Heading, VStack } from '@chakra-ui/react'
import { FormInput } from '@/components/molecules/FormInput'
import { Form, Formik } from 'formik'
import * as React from 'react'

export const Login = () => {
  return (
    <>
      <Heading>Login</Heading>
      <Formik
        initialValues={{}}
        onSubmit={() => {
          alert('not implemented')
        }}
      >
        <Form>
          <VStack align={'baseline'} spacing={8} px={4} py={{ base: 6, md: 8 }}>
            <FormInput id={'name'} label={'Name'} />
            <FormInput id={'password'} label={'Password'} type={'password'} />
          </VStack>
          <Center mt={8}>
            <Button type={'submit'} mx={'auto'}>
              Submit
            </Button>
          </Center>
        </Form>
      </Formik>
    </>
  )
}
