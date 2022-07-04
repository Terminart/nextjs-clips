import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Circle,
  Heading,
  HStack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import { genLoremIpsum } from '@/lib/lorem'

export type StepItemProps = {
  step: number
  title: string
}

export const StepItem = ({ step, title }: StepItemProps) => {
  const color = useColorModeValue('gray.300', 'palegreen.700')

  return (
    <AccordionItem border={'none'} my={4}>
      <AccordionButton _focus={{ boxShadow: 'none' }} px={{ base: 0, sm: 4 }}>
        <HStack w={'full'} justify={'space-between'}>
          <Circle bg={color} size={14}>
            <Heading>{step}</Heading>
          </Circle>
          <Heading flexGrow={1} textAlign={'start'} pl={2}>
            {title}
          </Heading>
          <AccordionIcon boxSize={10} />
        </HStack>
      </AccordionButton>
      <AccordionPanel display={'inline-flex'} pos={'relative'}>
        <Box
          pl={{ base: 8, sm: 14 }}
          _before={{
            content: '""',
            border: '1px solid',
            borderColor: color,
            h: 'full',
            position: 'absolute',
            left: { base: '27px', sm: '43.5px' },
            top: 0,
          }}
        >
          {genLoremIpsum(useBreakpointValue({ base: 1, sm: 3 })).map((v, i) => (
            <Text key={i}>{v}</Text>
          ))}
        </Box>
      </AccordionPanel>
    </AccordionItem>
  )
}
