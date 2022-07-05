import { Box, Tab, TabList, Tabs, useColorModeValue } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { PropsWithChildren } from 'react'

export type TabProps = {
  title: string
  group?: string
}

type Props = {
  tabs: TabProps[]
}

export const TabbedBox = ({ tabs, children }: PropsWithChildren<Props>) => {
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
      {children}
    </Box>
  )
}
