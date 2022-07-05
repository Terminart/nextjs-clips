import { NextPageWithLayout } from '@/pages/_app'
import { CategoryDetailLayout } from '@/components/layouts/CategoryDetailLayout'
import { ImageCardProps } from '@/components/molecules/ImageCard'
import { GalleryCarousel } from '@/components/templates/GalleryCarousel'

const mapImage = ['/balloons.jpg', '/beach.jpg', '/boat.jpg', '/road.jpg']
const sampleData = [...Array(10)].map<ImageCardProps>((v, i) => ({
  title: `test${i + 1}`,
  text: `test${i + 1}`,
  imageSrc: mapImage[i % 4],
}))

const Page: NextPageWithLayout = () => {
  return <GalleryCarousel slides={sampleData} />
}
Page.getLayout = (page) => <CategoryDetailLayout>{page}</CategoryDetailLayout>

export default Page
