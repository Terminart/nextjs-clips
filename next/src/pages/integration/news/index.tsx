import { NextPageWithLayout } from '@/pages/_app'
import { CategoryDetailLayout } from '@/components/layouts/CategoryDetailLayout'
import { IntegrationNews } from '@/components/templates/IntegrationNews'
import { GetServerSideProps } from 'next'
import { getAllNews } from '@/lib/firestore/news'
import { deserialize, serialize } from '@/lib/serialize'
import { News } from '@/types/news'

type Props = {
  news: News[]
}

const Page: NextPageWithLayout<Props> = (props) => {
  const news = deserialize(props.news)
  return <IntegrationNews news={news} />
}
Page.getLayout = (page) => <CategoryDetailLayout>{page}</CategoryDetailLayout>

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const result = await getAllNews()

  return {
    props: {
      news: serialize(result),
    },
  }
}

export default Page
