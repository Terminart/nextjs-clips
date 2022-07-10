import { NextPageWithLayout } from '@/pages/_app'
import { CategoryDetailLayout } from '@/components/layouts/CategoryDetailLayout'
import { Box } from '@chakra-ui/react'
import { PageTitle } from '@/components/atoms/PageTitle'
import { useRecoilState } from 'recoil'
import { wizardInputsAtom } from '@/states/atoms/wizard'
import { FormInputTemp } from '@/components/molecules/FormInputTemp'
import { object, string } from 'yup'
import { WizardForm } from '@/components/organisms/WizardForm'

const schema = object({
  country: string().max(50),
})

const Page: NextPageWithLayout = () => {
  const [wizObj, setWizObj] = useRecoilState(wizardInputsAtom)

  const initialValues = {
    country: wizObj.country || '',
  }

  return (
    <Box>
      <PageTitle title={'Wizard: Fourth page'} />
      <WizardForm
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          setWizObj((prev) => ({ ...prev, country: values.country }))
        }}
        back={'/integration/wizard/third'}
        next={'/integration/wizard/fifth'}
      >
        {({ errors, touched }) => (
          <FormInputTemp
            error={errors.country}
            touched={touched.country}
            id={'country'}
            label={'Country'}
          />
        )}
      </WizardForm>
    </Box>
  )
}
Page.getLayout = (page) => <CategoryDetailLayout>{page}</CategoryDetailLayout>

export default Page
