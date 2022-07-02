import { SignUp } from '@/components/organisms/SignUp'
import { NextPageWithLayout } from '@/pages/_app'
import { FormLayout } from '@/components/layouts/FormLayout'

const Page: NextPageWithLayout = () => {
  return <SignUp />
}
Page.getLayout = (page) => <FormLayout>{page}</FormLayout>

export default Page
