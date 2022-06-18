import type { NextPage } from 'next'
import { CategoryTop } from '@/components/templates/CategoryTop'
import { LinkWithImageProps } from '@/types/link'

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

const Page: NextPage = () => {
  return <CategoryTop links={sampleLinks} />
}

export default Page
