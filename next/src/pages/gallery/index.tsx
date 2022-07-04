import { CategoryTop } from '@/components/templates/CategoryTop'
import { toNestedLinks } from '@/lib/path'
import { NextPageWithLayout } from '@/pages/_app'
import { CategoryTopLayout } from '@/components/layouts/CategoryTopLayout'

const links = toNestedLinks('/gallery', [
  {
    href: '/tab',
    image: '/gallery-tab.jpg',
    title: 'Tab',
  },
  {
    href: '/group',
    image: '/gallery-tab.jpg',
    title: 'Group',
  },
  {
    href: '/carousel',
    image: '/gallery-tab.jpg',
    title: 'Carousel',
  },
  {
    href: '/step',
    image: '/gallery-tab.jpg',
    title: 'Step',
  },
])

const Page: NextPageWithLayout = () => {
  return <CategoryTop links={links} />
}
Page.getLayout = (page) => <CategoryTopLayout>{page}</CategoryTopLayout>

export default Page
