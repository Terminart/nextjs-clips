import { GalleryTabProps } from '@/components/templates/GalleryTab'
import { DateCardProps } from '@/components/molecules/DateCard'
import addDays from 'date-fns/addDays'
import { ImageCardProps } from '@/components/molecules/ImageCard'
import { StepItemProps } from '@/components/organisms/StepItem'

export function genTabSample(): GalleryTabProps {
  return {
    tabs: [
      {
        title: 'All',
        group: undefined,
      },
      {
        title: 'Odd',
        group: 'odd',
      },
      {
        title: 'Even',
        group: 'even',
      },
    ],
    cards: [...Array(10)].map((v, i) => ({
      number: i + 1,
      title: `Card ${i + 1}`,
      text: 'test '.repeat(i).trimEnd(),
      badges: Array.from({ length: i }, (v, i) => `b${i}`),
    })),
  }
}

export function genGroupSample(): DateCardProps[] {
  return [...Array(20)].map<DateCardProps>((v, i) => ({
    title: `day${i + 1}`,
    text: `day${i + 1}`,
    date: addDays(new Date(2022, 0, 1), i * 5),
  }))
}

export function genCarouselSample(): ImageCardProps[] {
  const mapImage = ['/balloons.jpg', '/beach.jpg', '/boat.jpg', '/road.jpg']
  return [...Array(10)].map<ImageCardProps>((v, i) => ({
    title: `test${i + 1}`,
    text: `test${i + 1}`,
    imageSrc: mapImage[i % 4],
  }))
}

export function genStepSample(): StepItemProps[] {
  return [
    {
      title: 'How to install the APP',
      step: 1,
    },
    {
      title: 'Setup the APP',
      step: 2,
    },
  ]
}
