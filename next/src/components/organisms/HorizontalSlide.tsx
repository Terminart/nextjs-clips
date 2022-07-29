import { Box, forwardRef, IconButton } from '@chakra-ui/react'
import Image from 'next/image'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import { AnimatePresence, motion, Variants } from 'framer-motion'

const animation: Variants = {
  initial: (direction: number) => {
    return {
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }
  },
  animate: {
    x: '0%',
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }
  },
}

type Props = {
  images: string[]
}

export const HorizontalSlide = forwardRef(({ images }: Props) => {
  const [[page, direction], setPage] = useState([0, 0])

  const paginate = (newDirection: number) => {
    const newPage = Math.abs((page + newDirection) % images.length)
    setPage([newPage, newDirection])
  }

  return (
    <>
      <IconButton
        variant={'circleFloat'}
        icon={<ChevronLeftIcon />}
        aria-label={'prev'}
        left={10}
        onClick={() => paginate(-1)}
      />
      <IconButton
        variant={'circleFloat'}
        icon={<ChevronRightIcon />}
        aria-label={'next'}
        right={10}
        onClick={() => paginate(1)}
      />
      <Box w={'full'} h={'full'} pos={'relative'} overflow={'hidden'}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            style={{ width: '100%', height: '100%', position: 'absolute' }}
            variants={animation}
            key={page}
            custom={direction}
            initial={'initial'}
            animate={'animate'}
            exit={'exit'}
            transition={{
              type: 'tween',
              duration: 1,
            }}
          >
            <Image
              src={images[page]}
              layout={'fill'}
              objectFit={'cover'}
              alt={'test'}
            />
          </motion.div>
        </AnimatePresence>
      </Box>
    </>
  )
})
