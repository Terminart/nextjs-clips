import { Box, Heading, useColorModeValue, VStack } from '@chakra-ui/react'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import Image from 'next/image'
import { DummyText } from '@/components/molecules/DummyText'

export const MotionParallaxScroll = () => {
  const color = useColorModeValue('gray.200', 'gray.600')

  const { scrollY } = useViewportScroll()
  const parallaxY = useTransform(scrollY, [0, 100], [0, -80], { clamp: false })

  return (
    <Box pos={'relative'}>
      <VStack w={'full'} pos={'relative'} zIndex={10}>
        <Box
          w={'full'}
          h={{ base: '400px', sm: '600px' }}
          bgColor={color}
          p={10}
        >
          <Heading>Lorem ipsum dolor sit amet</Heading>
          <DummyText paragraphs={3} noOfLines={{ base: 9, sm: 17 }} />
        </Box>
        <Box w={'full'} h={{ base: '400px', sm: '700px' }} bg={'transparent'} />
        <Box w={'full'} h={{ base: '400px', sm: '600px' }} bg={color} p={10}>
          <Heading>Lorem ipsum dolor sit amet</Heading>
          <DummyText paragraphs={3} noOfLines={{ base: 9, sm: 17 }} />
        </Box>
      </VStack>
      <motion.div
        style={{
          width: '100%',
          position: 'absolute',
          top: 400,
          zIndex: 5,
          y: parallaxY,
        }}
      >
        <Box w={'full'} h={{ base: '1100px', sm: '2000px' }} pos={'relative'}>
          <Image
            src={'/universe-splash.jpg'}
            layout={'fill'}
            objectFit={'cover'}
            alt={'background image'}
          />
        </Box>
        <Box w={'full'} h={{ base: '1100px', sm: '1500px' }} pos={'relative'}>
          <Image
            src={'/night-tree.jpg'}
            layout={'fill'}
            objectFit={'cover'}
            alt={'background image'}
          />
        </Box>
      </motion.div>
    </Box>
  )
}
