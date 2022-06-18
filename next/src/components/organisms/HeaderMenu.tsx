import { useRef } from 'react'
import {
  Box,
  Slide,
  useColorModeValue,
  useOutsideClick,
} from '@chakra-ui/react'
import { CategoryLinks } from '@/components/organisms/CategoryLinks'

type Props = {
  isOpen: boolean
  onClose(): void
  paddingTop: number | string
}

export const HeaderMenu = ({ isOpen, onClose, paddingTop }: Props) => {
  const ref = useRef(null)
  useOutsideClick({
    ref,
    handler: () => isOpen && onClose(),
  })

  return (
    <Slide
      direction={'top'}
      in={isOpen}
      style={{ paddingTop, zIndex: 'var(--chakra-zIndices-dropdown)' }}
      unmountOnExit={true}
      ref={ref}
    >
      <Box
        bg={useColorModeValue('gray.200', 'gray.600')}
        p={5}
        shadow={'inner'}
        opacity={0.9}
      >
        <CategoryLinks spacing={5} />
      </Box>
    </Slide>
  )
}
