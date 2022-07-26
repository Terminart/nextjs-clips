import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import { Path } from '@/types/path'

type Props = {
  href: Path
  isSelected?: boolean
  children: string
}

export const TextLink = ({ href, isSelected, children }: Props) => {
  const selectedStyles = useColorModeValue(
    { textDecorationLine: 'underline' },
    { color: 'palegreen.500' }
  )

  return (
    <Link href={href} passHref>
      <Text as={'a'} {...(isSelected ? selectedStyles : {})}>
        {children}
      </Text>
    </Link>
  )
}
