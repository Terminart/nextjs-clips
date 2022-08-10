import ReactInfiniteScroll from 'react-infinite-scroll-component'
import { Skeleton } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

type Props = {
  dataLength: number
  hasMore: boolean
  next(): void
}

export const InfiniteScroll = ({
  children,
  dataLength,
  hasMore,
  next,
}: PropsWithChildren<Props>) => {
  return (
    <ReactInfiniteScroll
      next={next}
      hasMore={hasMore}
      loader={<Skeleton h={20} />}
      dataLength={dataLength}
    >
      {children}
    </ReactInfiniteScroll>
  )
}
