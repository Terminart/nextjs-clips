import { NextPageWithLayout } from '@/pages/_app'
import { CategoryDetailLayout } from '@/components/layouts/CategoryDetailLayout'
import { Box } from '@chakra-ui/react'
import { PageTitle } from '@/components/atoms/PageTitle'
import { useSetRecoilState } from 'recoil'
import { wizardInputsAtom } from '@/states/atoms/wizard'
import { FormInputTemp } from '@/components/molecules/FormInputTemp'
import { object, SchemaOf, string } from 'yup'
import { WizardForm } from '@/components/organisms/WizardForm'

const initialValues = {
  fourthInput: '',
}
const schema: SchemaOf<typeof initialValues> = object({
  fourthInput: string().max(3).required(),
})

const Page: NextPageWithLayout = () => {
  const setWizObj = useSetRecoilState(wizardInputsAtom)

  return (
    <Box>
      <PageTitle title={'Wizard: Fourth page'} />
      <WizardForm
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          setWizObj((prev) => ({ ...prev, fourth: values.fourthInput }))
        }}
        back={'/integration/wizard/third'}
        next={'/integration/wizard/fifth'}
      >
        {({ errors, touched }) => (
          <FormInputTemp
            error={errors.fourthInput}
            touched={touched.fourthInput}
            id={'fourthInput'}
            label={'Sample2'}
          />
        )}
      </WizardForm>
    </Box>
  )
}
Page.getLayout = (page) => <CategoryDetailLayout>{page}</CategoryDetailLayout>

export default Page
