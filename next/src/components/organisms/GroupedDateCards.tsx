import { DateCard, DateCardProps } from '@/components/molecules/DateCard'
import { Wrap } from '@chakra-ui/react'
import { GroupDivider } from '@/components/atoms/GroupDivider'
import _ from 'lodash'
import format from 'date-fns/format'

export type GroupedDateCardsProps = {
  cards: DateCardProps[]
}

export const GroupedDateCards = ({ cards }: GroupedDateCardsProps) => {
  const grouped = _.chain(cards)
    .groupBy((v) => {
      const { date } = v
      return format(date, 'yyyy/MM')
    })
    .map((values, key) => ({
      key,
      values,
    }))

  return (
    <>
      {grouped
        .map((group) => (
          <>
            <GroupDivider title={group.key} />
            <Wrap
              spacing={{ base: 4, sm: 8 }}
              justify={{ base: 'center', sm: 'start' }}
              px={10}
            >
              {group.values.map((v, i) => (
                <DateCard {...v} key={i} />
              ))}
            </Wrap>
          </>
        ))
        .value()}
    </>
  )
}
