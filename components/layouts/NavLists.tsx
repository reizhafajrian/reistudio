import { Stack } from '@chakra-ui/react'
import NavItem from './NavItem'

const NavLists = () => {
  return (
    <Stack
      alignItems="center"
      direction={{ base: 'column', md: 'row' }}
      spacing={{ base: '4', lg: '6' }}
    >
      <NavItem href="/" title="home" />
      <NavItem href="/about" title="about" />
      <NavItem href="/services" title="services" />
      <NavItem href="/works" title="works" />
      <NavItem href="/blog" title="blog" />
      <NavItem href="/careers" title="careers" />
      <NavItem href="/contact" title="contact" />
    </Stack>
  )
}

export default NavLists
