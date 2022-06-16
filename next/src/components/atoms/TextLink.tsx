import { PropsWithChildren } from 'react'
import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'

type Props = PropsWithChildren<{
  href: string
}>

export const TextLink = ({ href, children }: Props) => {
  return (
    <Link href={href} passHref>
      <Text
        as={'a'}
        _hover={useColorModeValue(
          { textDecorationLine: 'underline' },
          { color: 'palegreen.500' }
        )}
      >
        {children}
      </Text>
    </Link>
  )
}
