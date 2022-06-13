import {
  Flex,
  HStack,
  IconButton,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { HamburgerIcon, MoonIcon, SearchIcon, SunIcon } from '@chakra-ui/icons'

export const Header = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <Flex
      w={'full'}
      h={'60px'}
      bg={'aliceblue'}
      align={'center'}
      justify={'space-between'}
      px={{ base: 7 }}
    >
      <Text textStyle={'headerLogo'}>Terminart</Text>
      <HStack textStyle={'headerLink'} spacing={5}>
        <Text>Home</Text>
        <Text>Components</Text>
        <Text>Motion</Text>
        <Text>Wizard</Text>
        <Text>List</Text>
      </HStack>
      <HStack>
        <IconButton
          aria-label={'change color mode'}
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          bg={'transparent'}
          onClick={toggleColorMode}
          size={'sm'}
        />
        <SearchIcon boxSize={8} />
        <HamburgerIcon boxSize={8} />
      </HStack>
    </Flex>
  )
}
