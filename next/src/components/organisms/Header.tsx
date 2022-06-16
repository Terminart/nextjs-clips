import {
  Box,
  Flex,
  HStack,
  Show,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import {
  CloseIcon,
  HamburgerIcon,
  MoonIcon,
  SearchIcon,
  SunIcon,
} from '@chakra-ui/icons'
import { IconButton } from '@/components/atoms/IconButton'
import { HeaderMenu } from '@/components/organisms/HeaderMenu'
import { CategoryLinks } from '@/components/organisms/CategoryLinks'
import Link from 'next/link'

const HEIGHT = 60

export const Header = () => {
  const { toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box bg={'inherit'}>
      <Flex
        w={'full'}
        h={`${HEIGHT}px`}
        align={'center'}
        justify={'space-between'}
        px={7}
        as={'header'}
        boxShadow={useColorModeValue('base', 'palegreen.500.blur')}
        pos={'relative'}
        zIndex={'sticky'}
        bg={'inherit'}
      >
        <Link href={'/'} passHref>
          <Text as={'a'} textStyle={'headerLogo'}>
            Terminart
          </Text>
        </Link>
        <Show above={'md'}>
          <CategoryLinks direction={'row'} spacing={8} />
        </Show>
        <HStack spacing={5}>
          <IconButton
            aria-label={'toggle color mode'}
            icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
            onClick={toggleColorMode}
          />
          <IconButton aria-label={'search'} icon={<SearchIcon />} />
          {isOpen ? (
            <IconButton
              aria-label={'close menu'}
              icon={<CloseIcon />}
              onClick={onClose}
              sx={{ svg: { w: 7, h: 7 } }}
            />
          ) : (
            <IconButton
              aria-label={'open menu'}
              icon={<HamburgerIcon />}
              onClick={onOpen}
            />
          )}
        </HStack>
      </Flex>
      <HeaderMenu isOpen={isOpen} onClose={onClose} paddingTop={HEIGHT} />
    </Box>
  )
}
