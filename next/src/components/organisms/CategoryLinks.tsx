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

export function CategoryLinks(props: StackProps) {
  const router = useRouter()

  return (
    <Stack textStyle={'categoryLink'} {...props}>
      {links.map((v, i) => (
        <TextLink
          key={i}
          href={v.href}
          selected={isHrefInCategory(v.href, router)}
        >
          {v.title}
        </TextLink>
      ))}
    </Stack>
  )
}
