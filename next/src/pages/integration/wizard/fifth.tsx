import { NextPageWithLayout } from '@/pages/_app'
import { CategoryDetailLayout } from '@/components/layouts/CategoryDetailLayout'
import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import { PageTitle } from '@/components/atoms/PageTitle'
import { useRecoilValue, useResetRecoilState } from 'recoil'
import { wizardInputsAtom } from '@/states/atoms/wizard'
import Router from 'next/router'
import Link from 'next/link'
import _ from 'lodash'

const Page: NextPageWithLayout = () => {
  const color = useColorModeValue('red', 'yellow')
  const wizObj = useRecoilValue(wizardInputsAtom)
  const reset = useResetRecoilState(wizardInputsAtom)

  return (
    <Box>
      <PageTitle title={'Wizard: Last page'} />
      <VStack
        align={'baseline'}
        spacing={6}
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
                <Text>{_.capitalize(k)}:</Text>
                <Text color={color}>{v}</Text>
              </>
            ))}
          </Grid>
        </Text>

        <Flex
          w={'full'}
          direction={{ base: 'column', sm: 'row' }}
          justify={'space-between'}
        >
          <Link href={'/integration/wizard/fourth'} passHref>
            <Button>Back</Button>
          </Link>
          <Button
            onClick={async () => {
              alert(JSON.stringify(wizObj))
              reset()
              await Router.push('/integration')
            }}
            mt={{ base: 8, sm: 0 }}
          >
            Submit
          </Button>
        </Flex>
      </VStack>
    </Box>
  )
}
Page.getLayout = (page) => <CategoryDetailLayout>{page}</CategoryDetailLayout>

export default Page
