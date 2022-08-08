import { NextPageWithLayout } from '@/pages/_app'
import { CategoryDetailLayout } from '@/components/layouts/CategoryDetailLayout'
import { IntegrationNews } from '@/components/templates/IntegrationNews'

const Page: NextPageWithLayout = () => {
  return <IntegrationNews />
}
Page.getLayout = (page) => <CategoryDetailLayout>{page}</CategoryDetailLayout>

export default Page
