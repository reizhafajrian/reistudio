import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text
} from '@chakra-ui/react'
import Image from 'next/image'

const Technology = () => {
  return (
    <Box px={4} mb={12} mx="auto" maxWidth="container.xl">
      <Box textAlign={{ md: 'center' }}>
        <Heading
          as="h2"
          fontSize={{ base: 18, md: 24, lg: 42 }}
          fontWeight="extrabold"
          mb={{ base: 2, md: 4 }}
          height={{ base: 100, md: 140 }}
        >
          OUR TECHNOLOGY
        </Heading>
        {/* <Text fontSize={{ base: 12, lg: 24 }} mb={{ base: 9, md: 12 }}>
          We develop your need with latest technology
        </Text> */}
      </Box>

      <Grid
        mb={{ base: 6, md: 9 }}
        templateColumns={{ md: 'repeat(2, 1fr)' }}
        gap={{ base: 8, lg: 28 }}
        placeItems="center"
      >
        <GridItem w="full">
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
                src="/assets/images/services_technology.png"
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
            At Rei Studio, &ldquo;Our Technology&ldquo; isn&apos;t just a phrase; it&apos;s a commitment to delivering unparalleled solutions that stand at the cutting edge of the digital world. We understand that the landscape of technology is ever-evolving, and staying ahead means leveraging the most advanced tools and methodologies available. Our approach is rooted in a deep-seated desire to not just meet, but exceed, the diverse needs of our clients through innovation and foresight.
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

export default Technology
