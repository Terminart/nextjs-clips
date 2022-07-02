import { DefaultLayout } from '@/components/layouts/DefaultLayout'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const CategoryDetailLayout = ({ children }: Props) => {
  return (
    <DefaultLayout mx={{ base: 4, md: 20 }} my={8}>
      {children}
    </DefaultLayout>
  )
}
