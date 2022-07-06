import { NextPageWithLayout } from '@/pages/_app'
import { CategoryDetailLayout } from '@/components/layouts/CategoryDetailLayout'
import { Box, Button, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { PageTitle } from '@/components/atoms/PageTitle'

const Page: NextPageWithLayout = () => {
  return (
    <Box>
      <PageTitle title={'Wizard'} />
      <Text fontSize={20} mb={10}>
        <Text>このページはRecoilを使ってみようというものです。</Text>
        <Text>
          試しにウィザード画面を作成してRecoilで状態を保存するようにしています。
        </Text>
      </Text>
      <Link href={'/integration/wizard/second'} passHref>
        <Button>Next</Button>
      </Link>
    </Box>
  )
}
Page.getLayout = (page) => <CategoryDetailLayout>{page}</CategoryDetailLayout>

export default Page
