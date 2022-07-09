import { NextPageWithLayout } from '@/pages/_app'
import { CategoryDetailLayout } from '@/components/layouts/CategoryDetailLayout'
import { Box } from '@chakra-ui/react'
import { PageTitle } from '@/components/atoms/PageTitle'
import { useSetRecoilState } from 'recoil'
import { wizAtom } from '@/states/atoms/wizard'
import { object, SchemaOf, string } from 'yup'
import { FormInputTemp } from '@/components/molecules/FormInputTemp'
import { WizardForm } from '@/components/organisms/WizardForm'

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
      <PageTitle title={'Wizard: Second page'} />
      <WizardForm
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          setWizObj((prev) => ({ ...prev, second: values.secondInput }))
        }}
        back={'/integration/wizard'}
        next={'/integration/wizard/third'}
      >
        {({ errors, touched }) => (
          <FormInputTemp
            error={errors.secondInput}
            touched={touched.secondInput}
            id={'secondInput'}
            label={'Sample2'}
          />
        )}
      </WizardForm>
    </Box>
  )
}
Page.getLayout = (page) => <CategoryDetailLayout>{page}</CategoryDetailLayout>

export default Page
