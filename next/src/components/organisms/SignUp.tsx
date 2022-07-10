import { Button, Center, Heading, VStack } from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import { FormInput } from '@/components/molecules/FormInput'

export const SignUp = () => {
  return (
    <>
      <Heading>SignUp</Heading>
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
