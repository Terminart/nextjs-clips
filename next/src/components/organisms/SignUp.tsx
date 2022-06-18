import {
  Box,
  Button,
  Center,
  Heading,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import { FormInput } from '@/components/molecules/FormInput'

export const SignUp = () => {
  return (
    <Box
      w={{ base: 300, md: 680 }}
      border={'2px solid'}
      borderColor={useColorModeValue('gray.400', 'palegreen.500')}
      borderRadius={'xl'}
      my={20}
      mx={'auto'}
      p={8}
    >
      <Heading>SignUp</Heading>
      <VStack align={'baseline'} spacing={8} px={4} py={{ base: 6, md: 8 }}>
        <FormInput label={'Name'} />
        <FormInput label={'Password'} type={'password'} />
        <FormInput label={'Confirm Password'} type={'password'} />
      </VStack>
      <Center mt={8}>
        <Button mx={'auto'}>SignUp</Button>
      </Center>
    </Box>
  )
}
