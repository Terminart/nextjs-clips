import { CategoryTop } from '@/components/templates/CategoryTop'
import { LinkWithImageProps } from '@/types/link'
import { NextPageWithLayout } from '@/pages/_app'
import { CategoryTopLayout } from '@/components/layouts/CategoryTopLayout'

const sampleLinks: LinkWithImageProps[] = [
  {
    href: '',
    image: '/gallery.jpg',
    title: 'test1',
  },
  {
    href: '',
    image: '/motion.jpg',
    title: 'test2',
  },
  {
    href: '',
    image: '/gallery.jpg',
    title: 'test3',
  },
]

const Page: NextPageWithLayout = () => {
  return <CategoryTop links={sampleLinks} />
}
Page.getLayout = (page) => <CategoryTopLayout>{page}</CategoryTopLayout>

export default Page
