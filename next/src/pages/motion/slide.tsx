import { NextPageWithLayout } from '@/pages/_app'
import { MotionSlide } from '@/components/templates/MotionSlide'
import { DefaultLayout } from '@/components/layouts/DefaultLayout'

const Page: NextPageWithLayout = () => {
  return <MotionSlide />
}
Page.getLayout = (page) => <DefaultLayout h={'full'}>{page}</DefaultLayout>

export default Page
