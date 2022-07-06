import { CategoryTop } from '@/components/templates/CategoryTop'
import { NextPageWithLayout } from '@/pages/_app'
import { CategoryTopLayout } from '@/components/layouts/CategoryTopLayout'
import { toNestedLinks } from '@/lib/path'

const links = toNestedLinks('/integration', [
  {
    href: '/wizard/first',
    image: '/gallery-tab.jpg',
    title: 'Wizard',
  },
])

const Page: NextPageWithLayout = () => {
  return <CategoryTop links={links} />
}
Page.getLayout = (page) => <CategoryTopLayout>{page}</CategoryTopLayout>

export default Page
