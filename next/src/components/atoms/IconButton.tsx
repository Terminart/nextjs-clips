import {
  IconButton as ChakraIconButton,
  IconButtonProps,
} from '@chakra-ui/react'

export const IconButton = (props: IconButtonProps) => {
  return (
    <ChakraIconButton
      size={'sm'}
      bg={'transparent'}
      sx={{ svg: { w: 'auto', h: 'auto' } }}
      {...props}
    />
  )
}
