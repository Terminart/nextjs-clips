import { Box } from '@chakra-ui/react'
import { Step, StepProps } from '@/components/organisms/Step'
import { PageTitle } from '@/components/atoms/PageTitle'

export const GalleryStep = ({ ...step }: StepProps) => {
  return (
    <Box>
      <PageTitle title={'Step'} />
      <Step {...step} />
    </Box>
  )
}
