import { Button, Center, Heading, VStack } from '@chakra-ui/react'
import { FormInput } from '@/components/molecules/FormInput'

export const SignUp = () => {
  return (
    <>
      <Heading>SignUp</Heading>
      <VStack align={'baseline'} spacing={8} px={4} py={{ base: 6, md: 8 }}>
        <FormInput label={'Name'} />
        <FormInput label={'Password'} type={'password'} />
        <FormInput label={'Confirm Password'} type={'password'} />
      </VStack>
      <Center mt={8}>
        <Button mx={'auto'}>SignUp</Button>
      </Center>
    </>
  )
}
