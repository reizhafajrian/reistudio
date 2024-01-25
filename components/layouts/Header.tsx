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
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import Logo from './Logo'
import NavLists from './NavLists'

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef(null)
  const router = useRouter()

  return (
    <Box
      pos="fixed"
      w="full"
      bgColor={router.pathname === '/' ? 'black' : 'brand.500'}
      zIndex={3}
      top="0"
    >
      <Flex
        maxW="container.xl"
        mx="auto"
        px="4"
        py={{ base: 3, md: 4, '2xl': 8 }}
        color="brand.100"
        alignItems="center"
        justifyContent="space-between"
        w="full"
      >
        <Logo />
        <Box display={{ base: 'none', md: 'block' }}>
          <NavLists />
        </Box>

        <Button
          display={{ base: 'block', md: 'none' }}
          variant="unstyled"
          ref={btnRef}
          onClick={onOpen}
          size="xs"
        >
          <Image src="/assets/icons/menu-hamburger.svg" alt="menu" layout='fill' />
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
              <NavLists onClose={onClose} />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  )
}

export default Header
