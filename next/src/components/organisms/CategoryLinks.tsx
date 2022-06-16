import { Stack, StackProps } from '@chakra-ui/react'
import { TextLink } from '@/components/atoms/TextLink'

export function CategoryLinks(props: StackProps) {
  return (
    <Stack textStyle={'categoryLink'} {...props}>
      <TextLink href={'/'}>Top</TextLink>
      <TextLink href={'/gallery'}>Gallery</TextLink>
      <TextLink href={'/motion'}>Motion</TextLink>
      <TextLink href={'/integration'}>Integration</TextLink>
    </Stack>
  )
}
