import { NextPageWithLayout } from '@/pages/_app'
import { CategoryDetailLayout } from '@/components/layouts/CategoryDetailLayout'
import { GalleryCarousel } from '@/components/templates/GalleryCarousel'
import { genCarouselSample } from '@/lib/sampleData'

const Page: NextPageWithLayout = () => {
  const sample = genCarouselSample()
  return <GalleryCarousel slides={sample} />
}
Page.getLayout = (page) => <CategoryDetailLayout>{page}</CategoryDetailLayout>

export default Page
