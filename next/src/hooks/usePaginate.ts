import { useState, WheelEvent, KeyboardEvent } from 'react'
import { useThrottle } from '@/hooks/useThrottle'
import { PanInfo } from 'framer-motion'

export const usePaginate = (length: number) => {
  const [{ page, direction }, setPage] = useState({ page: 0, direction: 0 })

  const paginate = (dir: number) => {
    if (dir === 0) return

    setPage((prev) => ({
      page: Math.abs((prev.page + dir) % length),
      direction: dir,
    }))
  }

  const onWheel = useThrottle((e: WheelEvent) => {
    paginate(Math.sign(e.deltaY))
  })

  const onPanStart = useThrottle(
    (e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      paginate(Math.sign(info.delta.y) * -1)
    }
  )

  const onKeyDown = useThrottle((e: KeyboardEvent) => {
    switch (e.code) {
      case 'ArrowUp':
        paginate(-1)
        break
      case 'ArrowDown':
        paginate(1)
        break
      default:
        return
    }
  })

  return { page, direction, paginate, onWheel, onPanStart, onKeyDown }
}
