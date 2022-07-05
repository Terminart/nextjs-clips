import { NextPageWithLayout } from '@/pages/_app'
import { CategoryDetailLayout } from '@/components/layouts/CategoryDetailLayout'
import { GalleryStep } from '@/components/templates/GalleryStep'
import { genStepSample } from '@/lib/sampleData'

const Page: NextPageWithLayout = () => {
  const sample = genStepSample()
  return <GalleryStep items={sample} />
}
Page.getLayout = (page) => <CategoryDetailLayout>{page}</CategoryDetailLayout>

export default Page
