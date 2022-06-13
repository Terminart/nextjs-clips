import {
  Flex,
  HStack,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { HamburgerIcon, MoonIcon, SearchIcon, SunIcon } from '@chakra-ui/icons'
import { IconButton } from '@/components/atoms/IconButton'

export const Header = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <Flex
      w={'full'}
      h={'60px'}
      align={'center'}
      justify={'space-between'}
      px={7}
      as={'header'}
      boxShadow={useColorModeValue('base', 'palegreen.blur')}
    >
      <Text textStyle={'headerLogo'}>Terminart</Text>
      <HStack textStyle={'headerLink'} spacing={8}>
        <Text>Home</Text>
        <Text>Components</Text>
        <Text>Motion</Text>
        <Text>Wizard</Text>
        <Text>List</Text>
      </HStack>
      <HStack spacing={5}>
        <IconButton
          aria-label={'toggle color mode'}
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          onClick={toggleColorMode}
        />
        <IconButton aria-label={'search'} icon={<SearchIcon />} />
        <IconButton aria-label={'menu'} icon={<HamburgerIcon />} />
      </HStack>
    </Flex>
  )
}
