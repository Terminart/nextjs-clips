import { CategoryTop } from '@/components/templates/CategoryTop'
import { NextPageWithLayout } from '@/pages/_app'
import { CategoryTopLayout } from '@/components/layouts/CategoryTopLayout'
import { LinkWithImageProps } from '@/types/link'
import { path } from '@/types/path'

const links: LinkWithImageProps[] = [
  {
    href: path.integration.wizard.index,
    image: '/gallery-tab.jpg',
    title: 'Wizard',
  },
  {
    href: path.integration.news.index,
    image: '/gallery-tab.jpg',
    title: 'News',
  },
]

const Page: NextPageWithLayout = () => {
  return <CategoryTop links={links} />
}
Page.getLayout = (page) => <CategoryTopLayout>{page}</CategoryTopLayout>

export default Page
