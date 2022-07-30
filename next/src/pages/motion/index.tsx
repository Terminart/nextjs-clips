import { CategoryTop } from '@/components/templates/CategoryTop'
import { NextPageWithLayout } from '@/pages/_app'
import { CategoryTopLayout } from '@/components/layouts/CategoryTopLayout'
import { motion } from 'framer-motion'
import { LinkWithImageProps } from '@/types/link'
import { path } from '@/types/path'

const links: LinkWithImageProps[] = [
  {
    href: path.motion.parallax,
    image: '/gallery-tab.jpg',
    title: 'Parallax Scroll',
  },
  {
    href: path.motion.slide,
    image: '/gallery-tab.jpg',
    title: 'Slide',
  },
]

const Page: NextPageWithLayout = () => {
  return (
    <motion.div
      initial={{ filter: 'blur(20px)', opacity: 0 }}
      animate={{ filter: 'blur(0px)', opacity: 1 }}
      exit={{ filter: 'blur(20px)', opacity: 0 }}
      transition={{ type: 'tween', duration: 0.5 }}
    >
      <CategoryTop links={links} />
    </motion.div>
  )
}
Page.getLayout = (page) => <CategoryTopLayout>{page}</CategoryTopLayout>

export default Page
