import {
  NumberedCard,
  NumberedCardProps,
} from '@/components/molecules/NumberedCard'
import {
  Box,
  SimpleGrid,
  Tab,
  TabList,
  Tabs,
  useColorModeValue,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'

export type GalleryTabProps = {
  tabs: {
    title: string
    group?: string
  }[]
  cards: NumberedCardProps[]
}

export const GalleryTab = ({ tabs, cards }: GalleryTabProps) => {
  const router = useRouter()

  return (
    <Box
      border={'2px solid'}
      borderColor={useColorModeValue('gray.500', 'purple.500')}
      borderRadius={'lg'}
    >
      <Tabs
        isFitted
        variant={'line'}
        colorScheme={useColorModeValue('blue', 'purple')}
        onChange={(index) => {
          router
            .push({
              pathname: router.pathname,
              query: tabs[index].group && {
                group: tabs[index].group,
              },
            })
            .then()
        }}
      >
        <TabList>
          {tabs.map((v, i) => (
            <Tab key={i}>{v.title}</Tab>
          ))}
        </TabList>
      </Tabs>
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
    </Box>
  )
}
