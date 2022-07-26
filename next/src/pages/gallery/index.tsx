import { CategoryTop } from '@/components/templates/CategoryTop'
import { NextPageWithLayout } from '@/pages/_app'
import { CategoryTopLayout } from '@/components/layouts/CategoryTopLayout'
import { LinkWithImageProps } from '@/types/link'
import { path } from '@/types/path'

const links: LinkWithImageProps[] = [
  {
    href: path.gallery.tab,
    image: '/gallery-tab.jpg',
    title: 'Tab',
  },
  {
    href: path.gallery.group,
    image: '/gallery-tab.jpg',
    title: 'Group',
  },
  {
    href: path.gallery.carousel,
    image: '/gallery-tab.jpg',
    title: 'Carousel',
  },
  {
    href: path.gallery.step,
    image: '/gallery-tab.jpg',
    title: 'Step',
  },
]

const Page: NextPageWithLayout = () => {
  return <CategoryTop links={links} />
}
Page.getLayout = (page) => <CategoryTopLayout>{page}</CategoryTopLayout>

export default Page
