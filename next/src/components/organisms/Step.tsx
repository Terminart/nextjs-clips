import { Accordion } from '@chakra-ui/react'
import { StepItem, StepItemProps } from '@/components/organisms/StepItem'

export type StepProps = {
  items: StepItemProps[]
}

export const Step = ({ items }: StepProps) => {
  return (
    <Accordion allowMultiple={true} variant={'step'}>
      {items.map((v, i) => (
        <StepItem {...v} key={i} />
      ))}
    </Accordion>
  )
}
