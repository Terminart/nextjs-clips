import { Stack, StackProps } from '@chakra-ui/react'
import { TextLink } from '@/components/atoms/TextLink'
import { LinkWithImageProps } from '@/types/link'

type Props = StackProps & {
  links: LinkWithImageProps[]
  isSelected?: (link: LinkWithImageProps) => boolean
}

export function TextLinks({ links, isSelected, ...props }: Props) {
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
