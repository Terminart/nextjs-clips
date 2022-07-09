import { NextPageWithLayout } from '@/pages/_app'
import { CategoryDetailLayout } from '@/components/layouts/CategoryDetailLayout'
import { Box, Button, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { PageTitle } from '@/components/atoms/PageTitle'

const Page: NextPageWithLayout = () => {
  return (
    <Box>
      <PageTitle title={'Wizard'} />
      <Text fontSize={20} mb={10}>
        <Text>Recoilお試し実装</Text>
        <Text>異なるページの入力情報をRecoilを用いて保持します。</Text>
      </Text>
      <Flex justify={'end'}>
        <Link href={'/integration/wizard/second'} passHref>
          <Button>Next</Button>
        </Link>
      </Flex>
    </Box>
  )
}
Page.getLayout = (page) => <CategoryDetailLayout>{page}</CategoryDetailLayout>

export default Page
