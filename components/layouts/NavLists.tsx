import { Stack } from '@chakra-ui/react'
import NavItem from './NavItem'

const NavLists = ({ onClose }: { onClose?: () => void }) => {
  return (
    <Stack
      alignItems="center"
      direction={{ base: 'column', md: 'row' }}
      spacing={{ base: '4', lg: '6' }}
    >
      <NavItem onClose={onClose} href="/" title="home" />
      <NavItem onClose={onClose} href="/about" title="about" />
      <NavItem onClose={onClose} href="/services" title="services" />
      <NavItem onClose={onClose} href="/works" title="works" />
      {/* <NavItem onClose={onClose} href="/blog" title="blog" /> */}
      {/* <NavItem onClose={onClose} href="/careers" title="careers" /> */}
      <NavItem onClose={onClose} href="/contact" title="contact" />
    </Stack>
  )
}

export default NavLists
