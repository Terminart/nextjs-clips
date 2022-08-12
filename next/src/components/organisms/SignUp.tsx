import { Button, Center, Heading, VStack } from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import { FormInput } from '@/components/molecules/FormInput'
import { createUserWithEmailAndPassword, getAuth } from '@firebase/auth'
import Router from 'next/router'

export const SignUp = () => {
  return (
    <>
      <Heading>SignUp</Heading>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => {
          createUserWithEmailAndPassword(
            getAuth(),
            values.email,
            values.password
          )
            .then(async () => {
              await Router.push('/')
            })
            .catch((error) => {
              console.error(error)
              throw error
            })
          alert('ユーザを作成しました。')
        }}
      >
        <Form>
          <VStack align={'baseline'} spacing={8} px={4} py={{ base: 6, md: 8 }}>
            <FormInput id={'email'} label={'Email'} />
            <FormInput id={'password'} label={'Password'} type={'password'} />
            <FormInput
              id={'confirmPassword'}
              label={'Confirm Password'}
              type={'password'}
            />
          </VStack>
          <Center mt={8}>
            <Button type={'submit'} mx={'auto'}>
              SignUp
            </Button>
          </Center>
        </Form>
      </Formik>
    </>
  )
}
