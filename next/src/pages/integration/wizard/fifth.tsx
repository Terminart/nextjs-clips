import { NextPageWithLayout } from '@/pages/_app'
import { CategoryDetailLayout } from '@/components/layouts/CategoryDetailLayout'
import { Box, Button, Text } from '@chakra-ui/react'
import { PageTitle } from '@/components/atoms/PageTitle'

const Page: NextPageWithLayout = () => {
  return (
    <Box>
      <PageTitle title={'Wizard by Recoil: Fifth page'} />
      <Text fontSize={20} mb={10}>
        <Text>全ての入力が完了。</Text>
        <Text>保存を押して今までの入力内容が保存できます。</Text>
      </Text>
      <Button>Submit</Button>
    </Box>
  )
}
Page.getLayout = (page) => <CategoryDetailLayout>{page}</CategoryDetailLayout>

export default Page
