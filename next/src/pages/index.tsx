import type { NextPage } from 'next'
import { Button, Heading } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <>
      <Heading>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </Heading>
      <Button variant={'orange'}>test</Button>
    </>
  )
}

export default Home
