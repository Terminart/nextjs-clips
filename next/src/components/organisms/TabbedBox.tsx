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
  const colors = {
    nonSelectedText: useColorModeValue('gray.500', ''),
    selectedText: useColorModeValue('black', 'palegreen.500'),
    border: useColorModeValue('gray.500', 'palegreen.700'),
  }

  return (
    <Box border={'2px solid'} borderColor={colors.border} borderRadius={'lg'}>
      <Tabs
        isFitted
        variant={'line'}
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
            <Tab
              key={i}
              color={colors.nonSelectedText}
              _selected={{
                color: colors.selectedText,
                borderColor: colors.border,
                _focus: { boxShadow: 'none' },
              }}
            >
              {v.title}
            </Tab>
          ))}
        </TabList>
      </Tabs>
      {children}
    </Box>
  )
}
