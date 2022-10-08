import { Box, Button, Flex, Heading, HStack, Text } from '@chakra-ui/react'
import Image from 'next/future/image'
import Link from 'next/link'
import Logo from './Logo'
import NavLists from './NavLists'

const Footer = () => {
  return (
    <Box
      pt={[8, 24]}
      pb={[12]}
      px={4}
      mx="auto"
      color="brand.100"
      maxW="container.xl"
      textAlign={['center']}
    >
      <Box mb={6} display={['block', 'block', 'block', 'none']}>
        <Logo />
      </Box>
      <Heading
        mb={[3, 4]}
        as="h1"
        fontWeight="extrabold"
        fontSize={['lg', 'lg', '2xl', '4xl']}
      >
        Company Name
      </Heading>
      <Text
        mb={[3, 6]}
        maxW={['2xs', '2xs', 'md', '3xl']}
        mx="auto"
        fontSize={['xs', 'xs', 'sm', '2xl']}
      >
        Sahid Sudirman Residence, Jl. Jenderal Sudirman No.86, RT.10/RW.11,
        Karet Tengsin, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus
        Ibukota Jakarta 10250
      </Text>
      <HStack mb={[0, 0, 20, 40]} justifyContent="center" spacing={[2, 4]}>
        <SocialLink href="/" icon="facebook" />
        <SocialLink href="/" icon="instagram" />
        <SocialLink href="/" icon="linkedin" />
        <SocialLink href="/" icon="twitter" />
      </HStack>

      <Flex
        justifyContent="space-between"
        display={['none', 'none', 'none', 'flex']}
      >
        <NavLists />
        <Text fontSize="lg" letterSpacing="wide">
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
      <Button variant="unstyled" size={['xs', 'xs', 'md', 'lg']}>
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
