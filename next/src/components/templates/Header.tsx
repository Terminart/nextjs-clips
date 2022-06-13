import { Flex, HStack, Text } from '@chakra-ui/react'
import { HamburgerIcon, MoonIcon, SearchIcon, SunIcon } from '@chakra-ui/icons'

export const Header = () => {
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
        <SunIcon boxSize={8} />
        <MoonIcon boxSize={8} />
        <SearchIcon boxSize={8} />
        <HamburgerIcon boxSize={8} />
      </HStack>
    </Flex>
  )
}
