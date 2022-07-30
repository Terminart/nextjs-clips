import { HorizontalSlide } from '@/components/organisms/HorizontalSlide'
import { VerticalSlide } from '@/components/organisms/VerticalSlide'

export const MotionSlide = () => {
  return (
    <VerticalSlide>
      <HorizontalSlide images={['/night-tree.jpg', '/universe-splash.jpg']} />
      <HorizontalSlide images={['/ocean.jpg', '/sky.jpg']} />
    </VerticalSlide>
  )
}
