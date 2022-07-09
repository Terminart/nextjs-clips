import { NextPageWithLayout } from '@/pages/_app'
import { CategoryDetailLayout } from '@/components/layouts/CategoryDetailLayout'
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  VStack,
} from '@chakra-ui/react'
import { PageTitle } from '@/components/atoms/PageTitle'
import { FormInput2 } from '@/components/molecules/FormInput'
import { useSetRecoilState } from 'recoil'
import { wizAtom } from '@/states/atoms/wizard'
import { Form, Formik } from 'formik'
import Router from 'next/router'

const Page: NextPageWithLayout = () => {
  const setWizObj = useSetRecoilState(wizAtom)

  return (
    <Box>
      <PageTitle title={'Wizard by Recoil: Second page'} />
      <Formik
        initialValues={{ secondInput: '' }}
        onSubmit={async (values) => {
          setWizObj((prev) => ({ ...prev, second: values.secondInput }))
          await Router.push('/integration/wizard/third')
        }}
      >
        {({ errors, touched, isValid, dirty, isSubmitting }) => (
          <Form>
            <VStack
              align={'baseline'}
              spacing={8}
              px={4}
              py={{ base: 6, md: 8 }}
            >
              <FormControl
                isInvalid={!!errors.secondInput && touched.secondInput}
                isRequired
              >
                <FormInput2 id={'secondInput'} label={'Sample'} />
                <FormErrorMessage>{errors.secondInput}</FormErrorMessage>
              </FormControl>

              <Button
                type={'submit'}
                my={8}
                w={'full'}
                isLoading={isSubmitting}
                disabled={!isValid && !dirty}
              >
                Next
              </Button>
            </VStack>
          </Form>
        )}
      </Formik>
    </Box>
  )
}
Page.getLayout = (page) => <CategoryDetailLayout>{page}</CategoryDetailLayout>

export default Page
