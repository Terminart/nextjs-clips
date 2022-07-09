import { NextPageWithLayout } from '@/pages/_app'
import { CategoryDetailLayout } from '@/components/layouts/CategoryDetailLayout'
import { Box, Button, Text, VStack } from '@chakra-ui/react'
import { PageTitle } from '@/components/atoms/PageTitle'
import { useRecoilState } from 'recoil'
import { wizAtom } from '@/states/atoms/wizard'
import { Form, Formik } from 'formik'
import Router from 'next/router'
import { FormInputTemp } from '@/components/molecules/FormInputTemp'
import { object, SchemaOf, string } from 'yup'

const initialValues = {
  fourthInput: '',
}
const schema: SchemaOf<typeof initialValues> = object({
  fourthInput: string().max(3).required(),
})

const Page: NextPageWithLayout = () => {
  const [wizObj, setWizObj] = useRecoilState(wizAtom)

  return (
    <Box>
      <PageTitle title={'Wizard by Recoil: Fourth page'} />
      <Text>
        {Object.entries(wizObj).map(([k, v]) => (
          <Text key={k}>
            {k}:{v}
          </Text>
        ))}
      </Text>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          setWizObj((prev) => ({ ...prev, fourth: values.fourthInput }))
          await Router.push('/integration/wizard/fifth')
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
                error={errors.fourthInput}
                touched={touched.fourthInput}
                id={'fourthInput'}
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
