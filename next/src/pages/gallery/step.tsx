import { NextPageWithLayout } from '@/pages/_app'
import { CategoryDetailLayout } from '@/components/layouts/CategoryDetailLayout'
import { GalleryStep } from '@/components/templates/GalleryStep'
import { StepProps } from '@/components/organisms/Step'

const sampleData: StepProps = {
  items: [
    {
      title: 'How to install the APP',
      step: 1,
    },
    {
      title: 'Setup the APP',
      step: 2,
    },
  ],
}

const Page: NextPageWithLayout = () => {
  return <GalleryStep {...sampleData} />
}
Page.getLayout = (page) => <CategoryDetailLayout>{page}</CategoryDetailLayout>

export default Page
