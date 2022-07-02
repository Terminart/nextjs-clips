import { NextPageWithLayout } from '@/pages/_app'
import { CategoryDetailLayout } from '@/components/layouts/CategoryDetailLayout'
import { GroupedDate } from '@/components/organisms/GroupedDate'

const Page: NextPageWithLayout = () => {
  return <GroupedDate />
}
Page.getLayout = (page) => <CategoryDetailLayout>{page}</CategoryDetailLayout>

export default Page
