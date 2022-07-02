import type { GetServerSideProps } from 'next'
import { GalleryTab, GalleryTabProps } from '@/components/organisms/GalleryTab'
import _ from 'lodash'
import { NextPageWithLayout } from '@/pages/_app'
import { CategoryDetailLayout } from '@/components/layouts/CategoryDetailLayout'

const sampleData: GalleryTabProps = {
  tabs: [
    {
      title: 'All',
      group: undefined,
    },
    {
      title: 'Odd',
      group: 'odd',
    },
    {
      title: 'Even',
      group: 'even',
    },
  ],
  cards: [...Array(10)].map((v, i) => ({
    number: i + 1,
    title: `Card ${i + 1}`,
    text: 'test '.repeat(i).trimEnd(),
    badges: Array.from({ length: i }, (v, i) => `b${i}`),
  })),
}

type Props = {
  remainder?: number
}

const Page: NextPageWithLayout = ({ remainder }: Props) => {
  const cards = _.chain(sampleData.cards)
    .pickBy((v) => _.isNil(remainder) || v.number % 2 === remainder)
    .toArray()
    .value()

  return <GalleryTab tabs={sampleData.tabs} cards={cards} />
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
