import { Box } from '@chakra-ui/react'
import { PageTitle } from '@/components/atoms/PageTitle'
import {
  GroupedDateCards,
  GroupedDateCardsProps,
} from '@/components/organisms/GroupedDateCards'

export const GalleryGroup = (props: GroupedDateCardsProps) => {
  return (
    <Box>
      <PageTitle title={'Group'} />
      <GroupedDateCards {...props} />
    </Box>
  )
}
