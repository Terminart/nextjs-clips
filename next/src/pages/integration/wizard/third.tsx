import { NextPageWithLayout } from '@/pages/_app'
import { CategoryDetailLayout } from '@/components/layouts/CategoryDetailLayout'
import { useRecoilState } from 'recoil'
import { wizardInputAtom } from '@/states/atoms/wizard'
import { number, object } from 'yup'
import { WizardThird } from '@/components/templates/WizardThird'

const schema = object({
  age: number()
    .typeError('field must be digits only')
    .required()
    .positive()
    .max(100),
})

const Page: NextPageWithLayout = () => {
  const [wizardInput, setWizardInput] = useRecoilState(wizardInputAtom)

  const initialValues = {
    age: wizardInput.age > 0 ? wizardInput.age.toString() : '',
  }

  return (
    <WizardThird
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        setWizardInput((prev) => ({ ...prev, age: Number(values.age) }))
      }}
    />
  )
}
Page.getLayout = (page) => <CategoryDetailLayout>{page}</CategoryDetailLayout>

export default Page
