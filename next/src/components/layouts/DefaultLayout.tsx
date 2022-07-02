import { Header } from '@/components/templates/Header'
import { PropsWithChildren } from 'react'
import { Box, BoxProps } from '@chakra-ui/react'

type Props = BoxProps

export const DefaultLayout = ({
  children,
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <>
      <Header />
      <main>
        <Box {...props}>{children}</Box>
      </main>
    </>
  )
}
