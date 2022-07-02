import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/provider'
import customTheme from '@/theme/customTheme'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import { DefaultLayout } from '@/components/layouts/DefaultLayout'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>)

  return (
    <ChakraProvider theme={customTheme}>
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  )
}

export default MyApp
