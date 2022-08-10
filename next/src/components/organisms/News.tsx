import {
  Box,
  Divider,
  Heading,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import { getAllNews, News as NewsType } from '@/lib/firestore/news'
import format from 'date-fns/format'
import { InfiniteScroll } from '@/components/organisms/InfiniteScroll'
import { useState } from 'react'
import _ from 'lodash'

type Props = {
  news: NewsType[]
}

export const News = ({ news }: Props) => {
  const [list, setList] = useState(news)
  const [hasMore, setHasMore] = useState(true)

  const next = () => {
    getAllNews(_.last(list)?.createdAt).then((results) => {
      if (!results.length) {
        setHasMore(false)
      }
      setList([...list, ...results])
    })
  }

  const color = {
    divider: useColorModeValue('gray.300', 'gray.500'),
    hover: useColorModeValue('blackAlpha.100', 'whiteAlpha.200'),
  }

  return (
    <Box>
      <InfiniteScroll dataLength={list.length} hasMore={hasMore} next={next}>
        <VStack spacing={0} divider={<Divider borderColor={color.divider} />}>
          {list.map((v, i) => (
            <VStack
              w={'full'}
              align={'baseline'}
              cursor={'pointer'}
              _hover={{ bg: color.hover }}
              py={4}
              key={i}
            >
              <Heading size={'sm'} textDecoration={'underline'}>
                {v.title}
              </Heading>
              <Text px={3} fontSize={11} color={'gray.500'}>
                {format(v.createdAt.toDate(), 'yyyy/MM/dd')}
              </Text>
              <Text px={3} py={1} noOfLines={2}>
                {v.text}
              </Text>
            </VStack>
          ))}
        </VStack>
      </InfiniteScroll>
    </Box>
  )
}
