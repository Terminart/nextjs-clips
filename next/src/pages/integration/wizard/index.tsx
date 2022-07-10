import { NextPageWithLayout } from '@/pages/_app'
import { CategoryDetailLayout } from '@/components/layouts/CategoryDetailLayout'
import { WizardTop } from '@/components/templates/WizardTop'

const Page: NextPageWithLayout = () => {
  return <WizardTop />
}
Page.getLayout = (page) => <CategoryDetailLayout>{page}</CategoryDetailLayout>

export default Page
