import { NextPageWithLayout } from '@/pages/_app'
import { CategoryDetailLayout } from '@/components/layouts/CategoryDetailLayout'
import {
  Box,
  Button,
  Divider,
  Grid,
  HStack,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import { PageTitle } from '@/components/atoms/PageTitle'
import { useRecoilValue, useResetRecoilState } from 'recoil'
import { wizAtom } from '@/states/atoms/wizard'
import Router from 'next/router'
import Link from 'next/link'

const Page: NextPageWithLayout = () => {
  const color = useColorModeValue('red', 'yellow')
  const wizObj = useRecoilValue(wizAtom)
  const reset = useResetRecoilState(wizAtom)

  return (
    <Box>
      <PageTitle title={'Wizard: Last page'} />
      <VStack
        align={'baseline'}
        spacing={8}
        divider={<Divider borderColor={'gray.400'} />}
      >
        <Text fontSize={20}>
          <Text>全ての入力が完了しました。</Text>
          <Text>入力内容を確認し問題なければ登録を実行してください。</Text>
        </Text>

        <Text fontSize={18}>
          <Text>入力内容</Text>
          <Grid
            templateColumns={'repeat(2, 1fr)'}
            columnGap={4}
            rowGap={2}
            mx={4}
            mt={2}
          >
            {Object.entries(wizObj).map(([k, v]) => (
              <>
                <Text>{k}:</Text>
                <Text color={color}>{v}</Text>
              </>
            ))}
          </Grid>
        </Text>

        <HStack justify={'space-between'} w={'full'}>
          <Link href={'/integration/wizard/fourth'} passHref>
            <Button>Back</Button>
          </Link>
          <Button
            onClick={async () => {
              alert(JSON.stringify(wizObj))
              reset()
              await Router.push('/integration')
            }}
          >
            Submit
          </Button>
        </HStack>
      </VStack>
    </Box>
  )
}
Page.getLayout = (page) => <CategoryDetailLayout>{page}</CategoryDetailLayout>

export default Page
