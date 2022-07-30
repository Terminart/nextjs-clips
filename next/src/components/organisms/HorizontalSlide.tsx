import { Box, forwardRef, IconButton } from '@chakra-ui/react'
import Image from 'next/image'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import { AnimatePresence, motion, Variants } from 'framer-motion'
import { useThrottle } from '@/hooks/useThrottle'

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
  const [{ page, direction }, setPage] = useState({ page: 0, direction: 0 })

  const paginate = (direction: number) => {
    setPage((prev) => ({
      page: Math.abs((prev.page + direction) % images.length),
      direction,
    }))
  }

  return (
    <>
      <IconButton
        variant={'circleFloat'}
        icon={<ChevronLeftIcon />}
        aria-label={'prev'}
        left={10}
        onClick={useThrottle(() => paginate(-1), 1500)}
      />
      <IconButton
        variant={'circleFloat'}
        icon={<ChevronRightIcon />}
        aria-label={'next'}
        right={10}
        onClick={useThrottle(() => paginate(1), 1500)}
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
