import { SimpleGrid } from '@chakra-ui/react'
import { SquareLink } from '@/components/atoms/SquareLink'
import { LinkWithImageProps } from '@/types/link'

type Props = {
  links: LinkWithImageProps[]
}

export const CategoryTop = ({ links }: Props) => {
  return (
    <SimpleGrid
      spacingX={20}
      spacingY={{ base: 10, sm: 20 }}
      minChildWidth={'300px'}
    >
      {links.map((props, i) => (
        <SquareLink key={i} {...props} />
      ))}
    </SimpleGrid>
  )
}
