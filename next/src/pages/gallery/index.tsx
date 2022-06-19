import type { NextPage } from 'next'
import { CategoryTop } from '@/components/templates/CategoryTop'
import { toNestedLinks } from '@/lib/path'

const links = toNestedLinks('/gallery', [
  {
    href: '/tab',
    image: '/gallery-tab.jpg',
    title: 'Tab',
  },
])

const Page: NextPage = () => {
  return <CategoryTop links={links} />
}

export default Page
