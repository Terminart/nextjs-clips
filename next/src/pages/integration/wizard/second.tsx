import { NextPageWithLayout } from '@/pages/_app'
import { CategoryDetailLayout } from '@/components/layouts/CategoryDetailLayout'
import { Box, Button, VStack } from '@chakra-ui/react'
import { PageTitle } from '@/components/atoms/PageTitle'
import { useSetRecoilState } from 'recoil'
import { wizAtom } from '@/states/atoms/wizard'
import { Form, Formik } from 'formik'
import Router from 'next/router'
import { object, SchemaOf, string } from 'yup'
import { FormInputTemp } from '@/components/molecules/FormInputTemp'

const initialValues = {
  secondInput: '',
}
const schema: SchemaOf<typeof initialValues> = object({
  secondInput: string().max(3).required(),
})

const Page: NextPageWithLayout = () => {
  const setWizObj = useSetRecoilState(wizAtom)

  return (
    <Box>
      <PageTitle title={'Wizard by Recoil: Second page'} />
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          setWizObj((prev) => ({ ...prev, second: values.secondInput }))
          await Router.push('/integration/wizard/third')
        }}
        validationSchema={schema}
      >
        {({ errors, touched, isValid, dirty, isSubmitting }) => (
          <Form>
            <VStack
              align={'baseline'}
              spacing={8}
              px={4}
              py={{ base: 6, md: 8 }}
            >
              <FormInputTemp
                error={errors.secondInput}
                touched={touched.secondInput}
                id={'secondInput'}
                label={'Sample2'}
              />

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
