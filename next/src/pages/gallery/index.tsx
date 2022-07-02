import { CategoryTop } from '@/components/templates/CategoryTop'
import { toNestedLinks } from '@/lib/path'
import { NextPageWithLayout } from '@/pages/_app'
import { CategoryLayout } from '@/components/layouts/CategoryLayout'

const links = toNestedLinks('/gallery', [
  {
    href: '/tab',
    image: '/gallery-tab.jpg',
    title: 'Tab',
  },
])

const Page: NextPageWithLayout = () => {
  return <CategoryTop links={links} />
}
Page.getLayout = (page) => <CategoryLayout>{page}</CategoryLayout>

export default Page
