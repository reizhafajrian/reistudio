import { Heading, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

const Logo = () => {
  return (
    <NextLink href="/" passHref>
      <Link _hover={{}}>
        <Heading as="h1" fontSize={['md', 'xl', '3xl']} letterSpacing="widest">
          LOGO
        </Heading>
      </Link>
    </NextLink>
  )
}

export default Logo
