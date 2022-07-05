import { NextPageWithLayout } from '@/pages/_app'
import { CategoryDetailLayout } from '@/components/layouts/CategoryDetailLayout'
import { GalleryGroup } from '@/components/templates/GalleryGroup'
import { genGroupSample } from '@/lib/sampleData'

const Page: NextPageWithLayout = () => {
  const sample = genGroupSample()
  return <GalleryGroup cards={sample} />
}
Page.getLayout = (page) => <CategoryDetailLayout>{page}</CategoryDetailLayout>

export default Page
