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
  thirdInput: '',
}
const schema: SchemaOf<typeof initialValues> = object({
  thirdInput: string().max(3).required(),
})

const Page: NextPageWithLayout = () => {
  const [wizObj, setWizObj] = useRecoilState(wizAtom)

  return (
    <Box>
      <PageTitle title={'Wizard by Recoil: Third page'} />
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
          setWizObj((prev) => ({ ...prev, third: values.thirdInput }))
          await Router.push('/integration/wizard/fourth')
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
                error={errors.thirdInput}
                touched={touched.thirdInput}
                id={'thirdInput'}
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
