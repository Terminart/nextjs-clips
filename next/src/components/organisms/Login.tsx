import { Button, Center, Heading, VStack } from '@chakra-ui/react'
import { FormInput } from '@/components/molecules/FormInput'
import { Form, Formik } from 'formik'
import * as React from 'react'
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth'
import Router from 'next/router'
import { object } from 'yup'
import { emailSchema, passwordSchema } from '@/lib/validation'

export const Login = () => {
  return (
    <>
      <Heading>Login</Heading>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={object({
          email: emailSchema,
          password: passwordSchema,
        })}
        onSubmit={(values, formikHelpers) => {
          alert('this function is NOT available now.')
          formikHelpers.setSubmitting(false)
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
        {({ errors, touched, isSubmitting, isValid }) => (
          <Form>
            <VStack
              align={'baseline'}
              spacing={8}
              px={4}
              py={{ base: 6, md: 8 }}
            >
              <FormInput
                id={'email'}
                label={'Email'}
                error={errors.email}
                touched={touched.email}
              />
              <FormInput
                id={'password'}
                label={'Password'}
                type={'password'}
                error={errors.password}
                touched={touched.password}
              />
            </VStack>
            <Center mt={8}>
              <Button
                type={'submit'}
                mx={'auto'}
                isLoading={isSubmitting}
                disabled={!isValid}
              >
                Submit
              </Button>
            </Center>
          </Form>
        )}
      </Formik>
    </>
  )
}
