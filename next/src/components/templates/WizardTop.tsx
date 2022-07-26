import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { PageTitle } from '@/components/atoms/PageTitle'
import Link from 'next/link'
import { path } from '@/types/path'

export const WizardTop = () => {
  return (
    <Box>
      <PageTitle title={'Wizard'} />
      <Text fontSize={20} mb={10}>
        <Text>Recoilお試し実装</Text>
        <Text>異なるページの入力情報をRecoilを用いて保持します。</Text>
      </Text>
      <Flex justify={'end'}>
        <Link href={path.integration.wizard.second} passHref>
          <Button>Next</Button>
        </Link>
      </Flex>
    </Box>
  )
}
