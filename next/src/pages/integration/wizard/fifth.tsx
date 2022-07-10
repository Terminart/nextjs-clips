import { NextPageWithLayout } from '@/pages/_app'
import { CategoryDetailLayout } from '@/components/layouts/CategoryDetailLayout'
import { useRecoilValue, useResetRecoilState } from 'recoil'
import { wizardInputsAtom } from '@/states/atoms/wizard'
import Router from 'next/router'
import { WizardFifth } from '@/components/templates/WizardFifth'

const Page: NextPageWithLayout = () => {
  const wizObj = useRecoilValue(wizardInputsAtom)
  const reset = useResetRecoilState(wizardInputsAtom)

  return (
    <WizardFifth
      values={wizObj}
      onSubmit={async () => {
        alert(JSON.stringify(wizObj))
        reset()
        await Router.push('/integration')
      }}
    />
  )
}
Page.getLayout = (page) => <CategoryDetailLayout>{page}</CategoryDetailLayout>

export default Page
