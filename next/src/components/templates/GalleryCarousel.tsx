import { Box } from '@chakra-ui/react'
import { PageTitle } from '@/components/atoms/PageTitle'
import { CarouselProps } from '@/components/organisms/Carousel'
import { Carousel } from '@/components/organisms/Carousel'

export const GalleryCarousel = (props: CarouselProps) => {
  return (
    <Box>
      <PageTitle title={'Carousel'} />
      <Carousel {...props} />
    </Box>
  )
}
