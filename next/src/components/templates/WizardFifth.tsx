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
import { Fragment } from 'react'
import _ from 'lodash'
import Link from 'next/link'
import { WizardInput } from '@/types/wizardInput'

type Props = {
  values: WizardInput
  onSubmit: () => void | Promise<void>
}

export const WizardFifth = ({ values, onSubmit }: Props) => {
  const color = useColorModeValue('red', 'yellow')

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
            {Object.entries(values).map(([k, v]) => (
              <Fragment key={k}>
                <Text>{_.capitalize(k)}:</Text>
                <Text color={color}>{v}</Text>
              </Fragment>
            ))}
          </Grid>
        </Text>

        <Flex
          w={'full'}
          direction={{ base: 'column', sm: 'row' }}
          justify={'space-between'}
        >
          <Link href={'/integration/wizard/fourth'} passHref>
            <Button variant={'negative'}>Back</Button>
          </Link>
          <Button onClick={onSubmit} mt={{ base: 8, sm: 0 }}>
            Submit
          </Button>
        </Flex>
      </VStack>
    </Box>
  )
}
