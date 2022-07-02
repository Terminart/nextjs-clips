import { DefaultLayout } from '@/components/layouts/DefaultLayout'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const CategoryTopLayout = ({ children }: Props) => {
  return (
    <DefaultLayout my={{ base: 8, sm: 16 }} mx={{ base: 8, sm: 20 }}>
      {children}
    </DefaultLayout>
  )
}
