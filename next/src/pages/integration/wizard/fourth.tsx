import { NextPageWithLayout } from '@/pages/_app'
import { CategoryDetailLayout } from '@/components/layouts/CategoryDetailLayout'
import { useRecoilState } from 'recoil'
import { wizardInputAtom } from '@/states/atoms/wizard'
import { object, string } from 'yup'
import { WizardFourth } from '@/components/templates/WizardFourth'

const schema = object({
  country: string().max(50),
})

const Page: NextPageWithLayout = () => {
  const [wizardInput, setWizardInput] = useRecoilState(wizardInputAtom)

  const initialValues = {
    country: wizardInput.country || '',
  }

  return (
    <WizardFourth
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        setWizardInput((prev) => ({ ...prev, country: values.country }))
      }}
    />
  )
}
Page.getLayout = (page) => <CategoryDetailLayout>{page}</CategoryDetailLayout>

export default Page
