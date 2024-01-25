import { Heading, Link } from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'

const Logo = () => {
  return (
    <NextLink href="/" passHref>
      <Link _hover={{}}>
        <Heading
          as="h1"
          fontSize={{ base: 'md', lg: '2xl', '2xl': '3xl' }}
          letterSpacing="widest"
        >
          <Image
            src="/assets/images/company.png"
            alt="rei studio"
            width={50}
            height={20}
            objectFit='cover'
          />
        </Heading>
      </Link>
    </NextLink>
  )
}

export default Logo
