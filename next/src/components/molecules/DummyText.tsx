import { Container, ContainerProps, Text } from '@chakra-ui/react'
import { genLoremIpsum } from '@/lib/lorem'

type Props = ContainerProps & {
  paragraphs?: number
}

export const DummyText = ({ paragraphs = 1, ...props }: Props) => {
  return (
    <Container maxW={'full'} {...props}>
      {genLoremIpsum(paragraphs).map((v, i) => (
        <Text key={i} mt={8}>
          {v}
        </Text>
      ))}
    </Container>
  )
}
