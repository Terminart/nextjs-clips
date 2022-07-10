import { NextPageWithLayout } from '@/pages/_app'
import { CategoryDetailLayout } from '@/components/layouts/CategoryDetailLayout'
import { Box } from '@chakra-ui/react'
import { PageTitle } from '@/components/atoms/PageTitle'
import { useRecoilState } from 'recoil'
import { wizardInputsAtom } from '@/states/atoms/wizard'
import { FormInputTemp } from '@/components/molecules/FormInputTemp'
import { number, object } from 'yup'
import { WizardForm } from '@/components/organisms/WizardForm'

const schema = object({
  age: number()
    .typeError('field must be digits only')
    .required()
    .positive()
    .max(100),
})

const Page: NextPageWithLayout = () => {
  const [wizObj, setWizObj] = useRecoilState(wizardInputsAtom)

  const initialValues = {
    age: wizObj.age || '',
  }

  return (
    <Box>
      <PageTitle title={'Wizard: Third page'} />
      <WizardForm
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          setWizObj((prev) => ({ ...prev, age: Number(values.age) }))
        }}
        back={'/integration/wizard/second'}
        next={'/integration/wizard/fourth'}
      >
        {({ errors, touched }) => (
          <FormInputTemp
            error={errors.age}
            touched={touched.age}
            id={'age'}
            label={'Age'}
            isRequired
          />
        )}
      </WizardForm>
    </Box>
  )
}
Page.getLayout = (page) => <CategoryDetailLayout>{page}</CategoryDetailLayout>

export default Page
