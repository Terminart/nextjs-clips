import { Button, Center, Heading, VStack } from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import { FormInputTemp } from '@/components/molecules/FormInputTemp'

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
            <FormInputTemp id={'name'} label={'Name'} />
            <FormInputTemp
              id={'password'}
              label={'Password'}
              type={'password'}
            />
            <FormInputTemp
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
