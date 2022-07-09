import { NextPageWithLayout } from '@/pages/_app'
import { CategoryDetailLayout } from '@/components/layouts/CategoryDetailLayout'
import { Box, Button, Text } from '@chakra-ui/react'
import { PageTitle } from '@/components/atoms/PageTitle'
import { useRecoilValue, useResetRecoilState } from 'recoil'
import { wizAtom } from '@/states/atoms/wizard'

const Page: NextPageWithLayout = () => {
  const wizObj = useRecoilValue(wizAtom)
  const reset = useResetRecoilState(wizAtom)

  return (
    <Box>
      <PageTitle title={'Wizard by Recoil: Fifth page'} />
      <Text>
        {Object.entries(wizObj).map(([k, v]) => (
          <Text key={k}>
            {k}:{v}
          </Text>
        ))}
      </Text>
      <Text fontSize={20} mb={10}>
        <Text>全ての入力が完了しました。</Text>
        <Text>保存を押して今までの入力内容が保存できます。</Text>
      </Text>
      <Button onClick={reset}>Submit</Button>
    </Box>
  )
}
Page.getLayout = (page) => <CategoryDetailLayout>{page}</CategoryDetailLayout>

export default Page
