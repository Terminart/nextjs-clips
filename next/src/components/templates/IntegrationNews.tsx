import { Box } from '@chakra-ui/react'
import { PageTitle } from '@/components/atoms/PageTitle'
import { News } from '@/components/organisms/News'

export const IntegrationNews = () => {
  return (
    <Box>
      <PageTitle title={'News'} />
      <News />
    </Box>
  )
}
