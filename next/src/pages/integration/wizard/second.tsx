import { NextPageWithLayout } from '@/pages/_app'
import { CategoryDetailLayout } from '@/components/layouts/CategoryDetailLayout'
import { Box, Button, VStack } from '@chakra-ui/react'
import { PageTitle } from '@/components/atoms/PageTitle'
import { FormInput } from '@/components/molecules/FormInput'
import { useSetRecoilState } from 'recoil'
import { wizAtom } from '@/states/atoms/wizard'
import Link from 'next/link'

const Page: NextPageWithLayout = () => {
  const setWizObj = useSetRecoilState(wizAtom)

  return (
    <Box>
      <PageTitle title={'Wizard by Recoil: Second page'} />
      <VStack align={'baseline'} spacing={8} px={4} py={{ base: 6, md: 8 }}>
        <FormInput
          label={'Sample'}
          onChange={(e) =>
            setWizObj((prev) => ({ ...prev, second: e.target.value }))
          }
        />
      </VStack>
      <Link href={'/integration/wizard/third'} passHref>
        <Button my={8}>Next</Button>
      </Link>
    </Box>
  )
}
Page.getLayout = (page) => <CategoryDetailLayout>{page}</CategoryDetailLayout>

export default Page
