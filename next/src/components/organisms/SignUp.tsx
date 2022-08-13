import { Button, Center, Heading, VStack } from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import { FormInput } from '@/components/molecules/FormInput'
import { createUserWithEmailAndPassword, getAuth } from '@firebase/auth'
import Router from 'next/router'
import { object } from 'yup'
import {
  confirmPasswordSchema,
  emailSchema,
  passwordSchema,
} from '@/lib/validation'

export const SignUp = () => {
  return (
    <>
      <Heading>SignUp</Heading>
      <Formik
        initialValues={{ email: '', password: '', confirmPassword: '' }}
        validationSchema={object({
          email: emailSchema,
          password: passwordSchema,
          confirmPassword: confirmPasswordSchema,
        })}
        onSubmit={(values, formikHelpers) => {
          alert('this function is NOT available now.')
          formikHelpers.setSubmitting(false)
          return

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
              <FormInput
                id={'confirmPassword'}
                label={'Confirm Password'}
                type={'password'}
                error={errors.confirmPassword}
                touched={touched.confirmPassword}
              />
            </VStack>
            <Center mt={8}>
              <Button
                type={'submit'}
                mx={'auto'}
                isLoading={isSubmitting}
                disabled={!isValid}
              >
                SignUp
              </Button>
            </Center>
          </Form>
        )}
      </Formik>
    </>
  )
}
