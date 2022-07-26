import { useRef } from 'react'
import {
  Box,
  Slide,
  useColorModeValue,
  useOutsideClick,
} from '@chakra-ui/react'
import { TextLinks, TextLinksProps } from '@/components/molecules/TextLinks'
import _ from 'lodash'
import { categoryLinks } from '@/lib/path'

const links: TextLinksProps['links'] = _.map(categoryLinks, (v) => ({
  href: v.href,
  title: v.title,
}))

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
        <TextLinks links={links} spacing={5} />
      </Box>
    </Slide>
  )
}
