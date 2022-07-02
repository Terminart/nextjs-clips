import { CategoryTop } from '@/components/templates/CategoryTop'
import { LinkWithImageProps } from '@/types/link'
import { NextPageWithLayout } from '@/pages/_app'
import { CategoryLayout } from '@/components/layouts/CategoryLayout'

const sampleLinks: LinkWithImageProps[] = [
  {
    href: '',
    image: '/gallery.jpg',
    title: 'test1',
  },
  {
    href: '',
    image: '/gallery.jpg',
    title: 'test3',
  },
  {
    href: '',
    image: '/integration.jpg',
    title: 'test4',
  },
  {
    href: '',
    image: '/motion.jpg',
    title: 'test5',
  },
]

const Page: NextPageWithLayout = () => {
  return <CategoryTop links={sampleLinks} />
}
Page.getLayout = (page) => <CategoryLayout>{page}</CategoryLayout>

export default Page
