import { Stack, StackProps } from '@chakra-ui/react'
import { TextLink } from '@/components/atoms/TextLink'
import { useRouter } from 'next/router'
import { LinkWithImageProps } from '@/types/link'
import {
  galleryLink,
  homeLink,
  integrationLink,
  isHrefInCategory,
  motionLink,
} from '@/lib/path'

const links: LinkWithImageProps[] = [
  homeLink,
  galleryLink,
  motionLink,
  integrationLink,
]

type Props = StackProps & {
  selection?: boolean
}

export function CategoryLinks({ selection, ...props }: Props) {
  const router = useRouter()

  return (
    <Stack textStyle={'categoryLink'} {...props}>
      {links.map((v, i) => (
        <TextLink
          key={i}
          href={v.href}
          selected={selection && isHrefInCategory(v.href, router)}
        >
          {v.title}
        </TextLink>
      ))}
    </Stack>
  )
}
