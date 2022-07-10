import { NextPageWithLayout } from '@/pages/_app'
import { CategoryDetailLayout } from '@/components/layouts/CategoryDetailLayout'
import { Box } from '@chakra-ui/react'
import { PageTitle } from '@/components/atoms/PageTitle'
import { useSetRecoilState } from 'recoil'
import { wizardInputsAtom } from '@/states/atoms/wizard'
import { object, string } from 'yup'
import { FormInputTemp } from '@/components/molecules/FormInputTemp'
import { WizardForm } from '@/components/organisms/WizardForm'

const initialValues = {
  name: '',
}
const schema = object({
  name: string().max(16).required(),
})

const Page: NextPageWithLayout = () => {
  const setWizObj = useSetRecoilState(wizardInputsAtom)

  return (
    <Box>
      <PageTitle title={'Wizard: Second page'} />
      <WizardForm
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          setWizObj((prev) => ({ ...prev, name: values.name }))
        }}
        back={'/integration/wizard'}
        next={'/integration/wizard/third'}
      >
        {({ errors, touched }) => (
          <FormInputTemp
            error={errors.name}
            touched={touched.name}
            id={'name'}
            label={'Name'}
            isRequired
          />
        )}
      </WizardForm>
    </Box>
  )
}
Page.getLayout = (page) => <CategoryDetailLayout>{page}</CategoryDetailLayout>

export default Page
