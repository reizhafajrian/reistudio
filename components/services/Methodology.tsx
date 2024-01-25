import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text
} from '@chakra-ui/react'
import Image from 'next/image'

const Methodology = () => {
  return (
    <Box px={4} mb={{ base: 12, md: 56 }} mx="auto" maxWidth="container.xl">
      <Box textAlign={{ md: 'center' }}>
        <Heading
          as="h2"
          fontSize={{ base: 18, md: 24, lg: 42 }}
          fontWeight="extrabold"
          mb={{ base: 2, md: 4 }}
          height={{ base: 100, md: 140 }}
        >
          OUR METHODOLOGY
        </Heading>
      </Box>
      <Grid
        mb={{ base: 6, md: 9 }}
        templateColumns={{ md: 'repeat(2, 1fr)' }}
        gap={{ base: 8, lg: 28 }}
        placeItems="center"
      >
        <GridItem w="full" order={{ md: 2 }}>
          <Box pos="relative">
            <Box
              w={{ base: '95%', md: '90%' }}
              mt={{ base: '-4', md: '-14' }}
              borderRadius={{ base: 4, md: 8 }}
              minH={{ base: '2xs', md: 'sm' }}
              pos="absolute"
            >
              <Image
                style={{ objectFit: 'cover' }}
                src="/assets/images/services_methodology.png"
                alt="technology"
                layout='fill'
              />
            </Box>
            <Box
              w={{ base: '95%', md: '90%' }}
              ml="auto"
              border={{ base: '4px', md: '8px' }}
              borderColor="brand.500"
              borderRadius={{ base: 4, md: 8 }}
              minH={{ base: '2xs', md: 'sm' }}
            />
          </Box>
        </GridItem>
        <GridItem>
          <Text fontSize={{ base: 12, lg: 24 }} mb={{ base: 4, md: 12 }}>
            At Rei Studio, our methodology is a unique blend of cutting-edge technology and strategic planning, ensuring that every project we undertake is not only innovative but also meticulously tailored to meet your specific needs. Our process is designed to be adaptive, responsive, and forward-looking, allowing us to create solutions that are both effective today and sustainable tomorrow.
          </Text>
          {/* <Text fontSize={{ base: 12, lg: 24 }}>
            Front End Mobile Platforms:
          </Text>
          <UnorderedList fontSize={{ base: 12, lg: 24 }}>
            <ListItem>
              iOS (Swift), Android (Kotlin), Hybrid (React Native & Flutter).
            </ListItem>
            <ListItem>
              Android Wear OS and Apple Watch App Development. iPad & Android
            </ListItem>
            <ListItem>
              Tablet App Development. Windows Desktop and MacOS App Development.
            </ListItem>
            <ListItem>Web App & CMS Development (Java, GoLang).</ListItem>
          </UnorderedList> */}
        </GridItem>
      </Grid>
    </Box>
  )
}

export default Methodology
