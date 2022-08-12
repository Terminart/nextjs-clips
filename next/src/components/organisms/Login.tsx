import { Button, Center, Heading, VStack } from '@chakra-ui/react'
import { FormInput } from '@/components/molecules/FormInput'
import { Form, Formik } from 'formik'
import * as React from 'react'
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth'
import Router from 'next/router'

export const Login = () => {
  return (
    <>
      <Heading>Login</Heading>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => {
          alert('this function is NOT available now.')
          return

          signInWithEmailAndPassword(getAuth(), values.email, values.password)
            .then(async () => {
              await Router.push('/')
            })
            .catch((error) => {
              console.error(error)
              throw error
            })
        }}
      >
        <Form>
          <VStack align={'baseline'} spacing={8} px={4} py={{ base: 6, md: 8 }}>
            <FormInput id={'email'} label={'Email'} />
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
