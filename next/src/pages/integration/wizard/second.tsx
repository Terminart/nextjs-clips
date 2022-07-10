import { NextPageWithLayout } from '@/pages/_app'
import { CategoryDetailLayout } from '@/components/layouts/CategoryDetailLayout'
import { useRecoilState } from 'recoil'
import { wizardInputAtom } from '@/states/atoms/wizard'
import { object, string } from 'yup'
import { WizardSecond } from '@/components/templates/WizardSecond'

const schema = object({
  name: string().max(16).required(),
})

const Page: NextPageWithLayout = () => {
  const [wizardInput, setWizardInput] = useRecoilState(wizardInputAtom)

  const initialValues = {
    name: wizardInput.name || '',
  }

  return (
    <WizardSecond
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        setWizardInput((prev) => ({ ...prev, name: values.name }))
      }}
    />
  )
}
Page.getLayout = (page) => <CategoryDetailLayout>{page}</CategoryDetailLayout>

export default Page
