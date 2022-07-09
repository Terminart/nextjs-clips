import { NextPageWithLayout } from '@/pages/_app'
import { CategoryDetailLayout } from '@/components/layouts/CategoryDetailLayout'
import { Box, Button, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import { PageTitle } from '@/components/atoms/PageTitle'
import { FormInput } from '@/components/molecules/FormInput'
import { useRecoilState } from 'recoil'
import { wizAtom } from '@/states/atoms/wizard'

const Page: NextPageWithLayout = () => {
  const [wizObj, setWizObj] = useRecoilState(wizAtom)

  return (
    <Box>
      <PageTitle title={'Wizard by Recoil: Third page'} />
      <Text>
        {Object.entries(wizObj).map(([k, v]) => (
          <Text key={k}>
            {k}:{v}
          </Text>
        ))}
      </Text>
      <VStack align={'baseline'} spacing={8} px={4} py={{ base: 6, md: 8 }}>
        <FormInput
          label={'Sample'}
          onChange={(e) =>
            setWizObj((prev) => ({ ...prev, third: e.target.value }))
          }
        />
      </VStack>
      <Link href={'/integration/wizard/fourth'} passHref>
        <Button>Next</Button>
      </Link>
    </Box>
  )
}
Page.getLayout = (page) => <CategoryDetailLayout>{page}</CategoryDetailLayout>

export default Page
