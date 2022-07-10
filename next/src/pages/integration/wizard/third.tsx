import { NextPageWithLayout } from '@/pages/_app'
import { CategoryDetailLayout } from '@/components/layouts/CategoryDetailLayout'
import { useRecoilState } from 'recoil'
import { wizardInputsAtom } from '@/states/atoms/wizard'
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
  const [wizObj, setWizObj] = useRecoilState(wizardInputsAtom)

  const initialValues = {
    age: wizObj.age > 0 ? wizObj.age.toString() : '',
  }

  return (
    <WizardThird
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        setWizObj((prev) => ({ ...prev, age: Number(values.age) }))
      }}
    />
  )
}
Page.getLayout = (page) => <CategoryDetailLayout>{page}</CategoryDetailLayout>

export default Page
