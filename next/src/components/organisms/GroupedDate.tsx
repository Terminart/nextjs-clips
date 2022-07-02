import { DateCard, DateCardProps } from '@/components/molecules/DateCard'
import { Wrap } from '@chakra-ui/react'
import addDays from 'date-fns/addDays'
import { GroupDivider } from '@/components/atoms/GroupDivider'
import _ from 'lodash'
import format from 'date-fns/format'

const sampleData: DateCardProps[] = [...Array(20)].map<DateCardProps>(
  (v, i) => ({
    title: `day${i + 1}`,
    text: `day${i + 1}`,
    date: addDays(new Date(2022, 0, 1), i * 5),
  })
)

export const GroupedDate = () => {
  const grouped = _.chain(sampleData)
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
