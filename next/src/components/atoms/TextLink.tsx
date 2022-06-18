import { PropsWithChildren } from 'react'
import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'

type Props = {
  href: string
  selected?: boolean
}

export const TextLink = ({
  href,
  selected,
  children,
}: PropsWithChildren<Props>) => {
  const selectedStyles = useColorModeValue(
    { textDecorationLine: 'underline' },
    { color: 'palegreen.500' }
  )

  return (
    <Link href={href} passHref>
      <Text as={'a'} {...(selected ? selectedStyles : {})}>
        {children}
      </Text>
    </Link>
  )
}
