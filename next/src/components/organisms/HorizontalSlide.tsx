import { Box, forwardRef } from '@chakra-ui/react'
import Image from 'next/image'

type Props = {
  images: unknown[]
}

export const HorizontalSlide = forwardRef(({ images }: Props, ref) => {
  // const [[page, direction], setPage] = useState([0, 0])
  //
  // const paginate = (newDirection: number) => {
  //   const newPage = Math.abs((page + newDirection) % images.length)
  //   setPage([newPage, newDirection])
  // }
  console.log(images.length, ref)

  return (
    <Box w={'full'} h={'full'} pos={'relative'}>
      <Image
        src={'/night-tree.jpg'}
        layout={'fill'}
        objectFit={'cover'}
        alt={'test'}
      />
    </Box>
  )
})
