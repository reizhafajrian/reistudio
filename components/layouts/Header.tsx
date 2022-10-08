import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  useDisclosure,
} from '@chakra-ui/react'
import Image from 'next/future/image'
import { useRef } from 'react'
import Logo from './Logo'
import NavLists from './NavLists'

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef(null)

  return (
    <Flex
      px="4"
      py={[3, 4, 4, 8]}
      color="brand.100"
      alignItems="center"
      justifyContent="space-between"
      pos="absolute"
      w="full"
    >
      <Logo />

      <Box display={['none', 'none', 'none', 'block']}>
        <NavLists />
      </Box>

      <Button
        display={['block', 'block', 'block', 'none']}
        variant="unstyled"
        ref={btnRef}
        onClick={onOpen}
        size="xs"
      >
        <Image src="/assets/icons/menu-hamburger.svg" alt="menu" fill />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent bg="brand.500" color="brand.100">
          <DrawerCloseButton />
          <DrawerHeader>
            <Logo />
          </DrawerHeader>
          <DrawerBody mt="16">
            <NavLists />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  )
}

export default Header
