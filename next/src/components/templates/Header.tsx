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
import { TextLinks, TextLinksProps } from '@/components/molecules/TextLinks'
import Link from 'next/link'
import { categoryLinks, isPathInCategory } from '@/lib/path'
import { useRouter } from 'next/router'
import _ from 'lodash'
import { path } from '@/types/path'

const HEIGHT = 60
const links: TextLinksProps['links'] = _.chain(categoryLinks)
  .pick(['home', 'gallery', 'motion', 'integration'])
  .map((v) => ({
    href: v.href,
    title: v.title,
  }))
  .value()

export const Header = () => {
  const { toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const router = useRouter()

  return (
    <Box bg={'inherit'} as={'header'}>
      <Flex
        w={'full'}
        h={`${HEIGHT}px`}
        align={'center'}
        justify={'space-between'}
        px={7}
        boxShadow={useColorModeValue('base', 'palegreen.500.blur')}
        pos={'relative'}
        zIndex={'sticky'}
        bg={'inherit'}
      >
        <Link href={path.home} passHref>
          <Text as={'a'} textStyle={'headerLogo'}>
            Terminart
          </Text>
        </Link>
        <Show above={'md'}>
          <TextLinks
            links={links}
            direction={'row'}
            spacing={8}
            isSelected={(link) => isPathInCategory(link.href, router)}
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
