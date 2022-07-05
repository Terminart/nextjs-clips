import { NextPageWithLayout } from '@/pages/_app'
import { CategoryDetailLayout } from '@/components/layouts/CategoryDetailLayout'
import { DateCardProps } from '@/components/molecules/DateCard'
import addDays from 'date-fns/addDays'
import { GalleryGroup } from '@/components/templates/GalleryGroup'

const sampleData: DateCardProps[] = [...Array(20)].map<DateCardProps>(
  (v, i) => ({
    title: `day${i + 1}`,
    text: `day${i + 1}`,
    date: addDays(new Date(2022, 0, 1), i * 5),
  })
)

const Page: NextPageWithLayout = () => {
  return <GalleryGroup cards={sampleData} />
}
Page.getLayout = (page) => <CategoryDetailLayout>{page}</CategoryDetailLayout>

export default Page
