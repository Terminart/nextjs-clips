import { Children, ReactNode, useState } from 'react'
import { AnimatePresence, motion, Variants } from 'framer-motion'
import { useThrottle } from '@/hooks/useThrottle'

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
  const [{ page, direction }, setPage] = useState({ page: 0, direction: 0 })
  const components = Children.toArray(children)

  const paginate = (dir: number) => {
    if (dir === 0) return

    setPage((prev) => ({
      page: Math.abs((prev.page + dir) % components.length),
      direction: dir,
    }))
  }

  return (
    <motion.div
      style={{
        height: '100%',
        overflow: 'hidden',
        position: 'relative',
      }}
      onWheel={useThrottle((e) => {
        paginate(Math.sign(e.deltaY))
      })}
      onPanStart={useThrottle((e, info) => {
        paginate(Math.sign(info.delta.y) * -1)
      })}
      onKeyDown={useThrottle((e) => {
        switch (e.keyCode) {
          case 38: // 上キー
            paginate(-1)
            break
          case 40: // 下キー
            paginate(1)
            break
          default:
            return
        }
      })}
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
