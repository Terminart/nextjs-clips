import { NextPageWithLayout } from '@/pages/_app'
import { CategoryDetailLayout } from '@/components/layouts/CategoryDetailLayout'
import { useRecoilState } from 'recoil'
import { wizardInputsAtom } from '@/states/atoms/wizard'
import { object, string } from 'yup'
import { WizardFourth } from '@/components/templates/WizardFourth'

const schema = object({
  country: string().max(50),
})

const Page: NextPageWithLayout = () => {
  const [wizObj, setWizObj] = useRecoilState(wizardInputsAtom)

  const initialValues = {
    country: wizObj.country || '',
  }

  return (
    <WizardFourth
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        setWizObj((prev) => ({ ...prev, country: values.country }))
      }}
    />
  )
}
Page.getLayout = (page) => <CategoryDetailLayout>{page}</CategoryDetailLayout>

export default Page
