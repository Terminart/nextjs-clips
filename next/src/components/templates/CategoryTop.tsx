import { SimpleGrid } from '@chakra-ui/react'
import { SquareLink, SquareLinkProps } from '@/components/atoms/SquareLink'

type Props = {
  links: SquareLinkProps[]
}

export const CategoryTop = ({ links }: Props) => {
  return (
    <SimpleGrid
      spacingX={20}
      spacingY={{ base: 10, sm: 20 }}
      minChildWidth={'300px'}
      my={{ base: 8, sm: 16 }}
      mx={{ base: 8, sm: 20 }}
    >
      {links.map((props, i) => (
        <SquareLink key={i} {...props} />
      ))}
    </SimpleGrid>
  )
}
