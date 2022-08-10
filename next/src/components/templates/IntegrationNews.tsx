import { Box } from '@chakra-ui/react'
import { PageTitle } from '@/components/atoms/PageTitle'
import { News } from '@/components/organisms/News'
import { News as NewsType } from '@/types/news'

type Props = {
  news: NewsType[]
}

export const IntegrationNews = ({ news }: Props) => {
  return (
    <Box>
      <PageTitle title={'News'} />
      <News news={news} />
    </Box>
  )
}
