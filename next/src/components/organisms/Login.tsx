import { Button, Center, Heading, VStack } from '@chakra-ui/react'
import { FormInputTemp } from '@/components/molecules/FormInputTemp'
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
            <FormInputTemp id={'name'} label={'Name'} />
            <FormInputTemp
              id={'password'}
              label={'Password'}
              type={'password'}
            />
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
