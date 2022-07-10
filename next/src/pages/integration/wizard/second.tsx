import { NextPageWithLayout } from '@/pages/_app'
import { CategoryDetailLayout } from '@/components/layouts/CategoryDetailLayout'
import { useRecoilState } from 'recoil'
import { wizardInputsAtom } from '@/states/atoms/wizard'
import { object, string } from 'yup'
import { WizardSecond } from '@/components/templates/WizardSecond'

const schema = object({
  name: string().max(16).required(),
})

const Page: NextPageWithLayout = () => {
  const [wizObj, setWizObj] = useRecoilState(wizardInputsAtom)

  const initialValues = {
    name: wizObj.name || '',
  }

  return (
    <WizardSecond
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        setWizObj((prev) => ({ ...prev, name: values.name }))
      }}
    />
  )
}
Page.getLayout = (page) => <CategoryDetailLayout>{page}</CategoryDetailLayout>

export default Page
