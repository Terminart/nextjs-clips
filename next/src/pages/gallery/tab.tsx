import type { GetServerSideProps } from 'next'
import { GalleryTab } from '@/components/templates/GalleryTab'
import _ from 'lodash'
import { NextPageWithLayout } from '@/pages/_app'
import { CategoryDetailLayout } from '@/components/layouts/CategoryDetailLayout'
import { genTabSample } from '@/lib/sampleData'

type Props = {
  remainder?: number
}

const Page: NextPageWithLayout = ({ remainder }: Props) => {
  const sample = genTabSample()
  const cards = _.chain(sample.cards)
    .pickBy((v) => _.isNil(remainder) || v.number % 2 === remainder)
    .toArray()
    .value()

  return <GalleryTab tabs={sample.tabs} cards={cards} />
}
Page.getLayout = (page) => <CategoryDetailLayout>{page}</CategoryDetailLayout>

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  return {
    props: context.query?.group
      ? {
          remainder: context.query.group === 'odd' ? 1 : 0,
        }
      : {},
  }
}

export default Page
