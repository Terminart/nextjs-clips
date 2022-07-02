import { Login } from '@/components/organisms/Login'
import { NextPageWithLayout } from '@/pages/_app'
import { FormLayout } from '@/components/layouts/FormLayout'

const Page: NextPageWithLayout = () => {
  return <Login />
}
Page.getLayout = (page) => <FormLayout>{page}</FormLayout>

export default Page
