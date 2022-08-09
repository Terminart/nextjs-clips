import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/provider'
import customTheme from '@/theme/customTheme'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import { DefaultLayout } from '@/components/layouts/DefaultLayout'
import { RecoilRoot } from 'recoil'
import { AnimatePresence } from 'framer-motion'

import '@/lib/firebase/init'

export type NextPageWithLayout<Props = Record<string, never>> =
  NextPage<Props> & {
    getLayout?: (page: ReactElement) => ReactNode
  }
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout<AppProps['pageProps']>
}

function MyApp({ Component, pageProps, router }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>)

  return (
    <RecoilRoot>
      <AnimatePresence exitBeforeEnter>
        <ChakraProvider theme={customTheme} key={router.asPath}>
          {getLayout(<Component {...pageProps} />)}
        </ChakraProvider>
      </AnimatePresence>
    </RecoilRoot>
  )
}

export default MyApp
