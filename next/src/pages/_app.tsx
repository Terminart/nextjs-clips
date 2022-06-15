import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/provider'
import customTheme from '@/theme/customTheme'
import { Header } from '@/components/organisms/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
