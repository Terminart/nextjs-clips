import { TabbedBox, TabProps } from '@/components/organisms/TabbedBox'
import { Box, SimpleGrid } from '@chakra-ui/react'
import {
  NumberedCard,
  NumberedCardProps,
} from '@/components/molecules/NumberedCard'
import { PageTitle } from '@/components/atoms/PageTitle'

export type GalleryTabProps = {
  tabs: TabProps[]
  cards: NumberedCardProps[]
}

export const GalleryTab = ({ tabs, cards }: GalleryTabProps) => {
  return (
    <Box>
      <PageTitle title={'Tab'} />
      <TabbedBox tabs={tabs}>
        <SimpleGrid
          spacingX={8}
          spacingY={12}
          columns={{ base: 1, lg: 2, xl: 3 }}
          justifyItems={'center'}
          p={8}
        >
          {cards.map((v) => (
            <NumberedCard {...v} key={v.number} />
          ))}
        </SimpleGrid>
      </TabbedBox>
    </Box>
  )
}
