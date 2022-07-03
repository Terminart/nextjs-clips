import { NextPageWithLayout } from '@/pages/_app'
import { CategoryDetailLayout } from '@/components/layouts/CategoryDetailLayout'
import { Carousel } from '@/components/organisms/Carousel'
import { ImageCardProps } from '@/components/molecules/ImageCard'

const mapImage = ['/balloons.jpg', '/beach.jpg', '/boat.jpg', '/road.jpg']
const sampleData = [...Array(10)].map<ImageCardProps>((v, i) => ({
  title: `test${i + 1}`,
  text: `test${i + 1}`,
  imageSrc: mapImage[i % 4],
}))

const Page: NextPageWithLayout = () => {
  return <Carousel slides={sampleData} />
}
Page.getLayout = (page) => <CategoryDetailLayout>{page}</CategoryDetailLayout>

export default Page
