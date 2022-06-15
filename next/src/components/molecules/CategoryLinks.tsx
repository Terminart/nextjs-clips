import { Stack, StackProps, Text } from '@chakra-ui/react'

export function CategoryLinks(props: StackProps) {
  return (
    <Stack textStyle={'categoryLink'} {...props}>
      <Text>Top</Text>
      <Text>Gallery</Text>
      <Text>Motion</Text>
      <Text>Integration</Text>
    </Stack>
  )
}
