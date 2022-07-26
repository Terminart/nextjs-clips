import { Stack, StackProps } from '@chakra-ui/react'
import { TextLink } from '@/components/atoms/TextLink'
import { Path } from '@/types/path'

export type TextLinksProps = StackProps & {
  links: {
    href: Path
    title: string
  }[]
  isSelected?: (link: TextLinksProps['links'][number]) => boolean
}

export function TextLinks({ links, isSelected, ...props }: TextLinksProps) {
  return (
    <Stack textStyle={'categoryLink'} {...props}>
      {links.map((v, i) => (
        <TextLink
          key={i}
          href={v.href}
          isSelected={isSelected && isSelected(v)}
        >
          {v.title}
        </TextLink>
      ))}
    </Stack>
  )
}
