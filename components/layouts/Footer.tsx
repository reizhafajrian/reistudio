import { Box, Button, Flex, Heading, HStack, Text } from '@chakra-ui/react'
import Image from 'next/future/image'
import Link from 'next/link'
import Logo from './Logo'
import NavLists from './NavLists'

const Footer = () => {
  return (
    <Box
      pt={{ base: 8, lg: 24 }}
      pb={12}
      px={4}
      mx="auto"
      color="brand.100"
      maxW="container.xl"
      textAlign="center"
    >
      <Box mb={6} display={{ base: 'block', lg: 'none' }}>
        <Logo />
      </Box>
      <Heading
        mb={{ base: 3, md: 4 }}
        as="h1"
        fontWeight="extrabold"
        fontSize={{ base: 'lg', lg: '2xl', '2xl': '4xl' }}
      >
        Company Name
      </Heading>
      <Text
        mb={{ base: 3, md: 6 }}
        maxW={{ base: '2xs', md: 'md', lg: 'xl', '2xl': '4xl' }}
        mx="auto"
        fontSize={{ base: 'xs', lg: 'md', '2xl': '2xl' }}
      >
        Sahid Sudirman Residence, Jl. Jenderal Sudirman No.86, RT.10/RW.11,
        Karet Tengsin, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus
        Ibukota Jakarta 10250
      </Text>
      <HStack
        mb={{ lg: 20, xl: 40 }}
        justifyContent="center"
        spacing={{ base: 2, lg: 4 }}
      >
        <SocialLink href="/" icon="facebook" />
        <SocialLink href="/" icon="instagram" />
        <SocialLink href="/" icon="linkedin" />
        <SocialLink href="/" icon="twitter" />
      </HStack>

      <Flex
        alignItems="center"
        justifyContent="space-between"
        display={{ base: 'none', lg: 'flex' }}
      >
        <NavLists />
        <Text fontSize={{ base: 'xs', xl: 'lg' }} letterSpacing="wide">
          Copyright &copy; 2022 Company Name
        </Text>
      </Flex>
    </Box>
  )
}

interface Props {
  href: string
  icon: string
}

const SocialLink = (props: Props) => {
  return (
    <Link href={props.href} target="_blank">
      <Button variant="unstyled" size={{ base: 'xs', lg: 'md', '2xl': 'lg' }}>
        <Image
          src={`/assets/icons/social-${props.icon}.svg`}
          alt={props.icon}
          fill
        />
      </Button>
    </Link>
  )
}

export default Footer
