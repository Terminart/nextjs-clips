import { Children, ReactNode } from 'react'
import { AnimatePresence, motion, Variants } from 'framer-motion'
import { usePaginate } from '@/hooks/usePaginate'

const scrollAnimation: Variants = {
  initial: (direction: number) => {
    return {
      y: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }
  },
  animate: {
    y: '0%',
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      y: direction > 0 ? '-100%' : '100%',
      opacity: 0,
    }
  },
}

export const VerticalSlide = ({ children }: { children: ReactNode }) => {
  const components = Children.toArray(children)
  const { page, direction, onWheel, onPanStart, onKeyDown } = usePaginate(
    components.length
  )

  return (
    <motion.div
      style={{
        height: '100%',
        overflow: 'hidden',
        position: 'relative',
      }}
      onWheel={onWheel}
      onPanStart={onPanStart}
      onKeyDown={onKeyDown}
    >
      <AnimatePresence custom={direction}>
        <motion.div
          style={{
            height: '100%',
            width: '100%',
            position: 'absolute',
          }}
          variants={scrollAnimation}
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
          {components[page]}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}
