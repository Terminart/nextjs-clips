import { NextPageWithLayout } from '@/pages/_app'
import { CategoryDetailLayout } from '@/components/layouts/CategoryDetailLayout'
import { useRecoilValue, useResetRecoilState } from 'recoil'
import { wizardInputAtom } from '@/states/atoms/wizard'
import Router from 'next/router'
import { WizardFifth } from '@/components/templates/WizardFifth'

const Page: NextPageWithLayout = () => {
  const wizardInput = useRecoilValue(wizardInputAtom)
  const reset = useResetRecoilState(wizardInputAtom)

  return (
    <WizardFifth
      values={wizardInput}
      onSubmit={async () => {
        alert(JSON.stringify(wizardInput))
        reset()
        await Router.push('/integration')
      }}
    />
  )
}
Page.getLayout = (page) => <CategoryDetailLayout>{page}</CategoryDetailLayout>

export default Page
