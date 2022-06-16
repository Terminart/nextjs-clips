import type { NextPage } from 'next'
import { Gallery } from '@/components/templates/Gallery'
import { SquareLinkProps } from '@/components/atoms/SquareLink'

const sampleLinks: SquareLinkProps[] = [
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

const Page: NextPage = () => {
  return <Gallery links={sampleLinks} />
}

export default Page
