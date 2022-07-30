import { SlideHorizontal } from '@/components/organisms/SlideHorizontal'
import { SlideVertical } from '@/components/organisms/SlideVertical'

export const MotionSlide = () => {
  return (
    <SlideVertical>
      <SlideHorizontal images={['/night-tree.jpg', '/universe-splash.jpg']} />
      <SlideHorizontal images={['/ocean.jpg', '/sky.jpg']} />
    </SlideVertical>
  )
}
