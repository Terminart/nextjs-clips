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
import { TextLinks } from '@/components/molecules/TextLinks'
import Link from 'next/link'
import { headerLinks, isHrefInCategory } from '@/lib/path'
import { useRouter } from 'next/router'

const HEIGHT = 60

export const Header = () => {
  const { toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const router = useRouter()

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
          <TextLinks
            links={headerLinks}
            direction={'row'}
            spacing={8}
            isSelected={(link) => isHrefInCategory(link.href, router)}
          />
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
