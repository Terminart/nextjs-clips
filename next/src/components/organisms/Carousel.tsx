import { Box } from '@chakra-ui/layout'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ColorMode, CSSObject, useColorMode } from '@chakra-ui/react'
import { ImageCard, ImageCardProps } from '@/components/molecules/ImageCard'
import { mode } from '@chakra-ui/theme-tools'

const slickStyles = (colorMode: ColorMode): CSSObject => ({
  '.slick-dots li button:before': {
    fontSize: 20,
    color: mode('gray.400', 'white')({ colorMode }),
    opacity: 0.5,
  },
  '.slick-dots li button:hover:before': {
    color: mode('gray.800', 'palegreen.500')({ colorMode }),
    opacity: 0.7,
  },
  '.slick-dots li.slick-active button:before': {
    color: mode('gray.800', 'palegreen.500')({ colorMode }),
    opacity: 1,
  },
  '.slick-slide': {
    px: { base: 1, sm: 4 },
  },
})

type Props = {
  slides: ImageCardProps[]
}

export const Carousel = ({ slides }: Props) => {
  const { colorMode } = useColorMode()

  return (
    <Box sx={slickStyles(colorMode)}>
      <Slider
        arrows={false}
        dots={true}
        infinite={true}
        slidesToShow={3}
        centerMode={false}
        responsive={[
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 680,
            settings: {
              slidesToShow: 1,
              centerMode: true,
              centerPadding: '0px',
            },
          },
        ]}
      >
        {slides.map((slide, i) => (
          <ImageCard key={i} {...slide} />
        ))}
      </Slider>
    </Box>
  )
}
