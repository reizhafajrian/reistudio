import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import Image from 'next/future/image'
import { useRouter } from 'next/router'

const Services = () => {
  return (
    <Box
      px={4}
      mb={40}
      mx="auto"
      maxWidth="container.xl"
      textAlign={{ md: 'center' }}
    >
      <Heading
        as="h2"
        fontSize={{ base: 18, md: 24, lg: 42 }}
        fontWeight="extrabold"
        mb={{ base: 2, md: 4 }}
      >
        OUR SERVICES
      </Heading>
      <Text fontSize={{ base: 12, lg: 24 }} mb={{ base: 4, md: 12 }}>
        We deliver the best products through the simplest features in the
        software
      </Text>
      <Grid
        mb={{ base: 6, md: 9 }}
        templateColumns={{ md: 'repeat(3, 1fr)' }}
        gap={{ base: 4, lg: 6 }}
      >
        <ServiceItem image="services_webdev" />
        <ServiceItem image="services_webapp" />
        <ServiceItem image="services_mobileapp" />
      </Grid>
    </Box>
  )
}

export default Services

const ServiceItem = ({ image }: { image: string }) => {
  const router = useRouter()
  return (
    <GridItem
      onClick={() => router.replace('/services')}
      pos="relative"
      minH={{ base: 'xs', md: '2xs', lg: 'sm' }}
    >
      <Image src={`/assets/images/${image}.png`} alt={image} fill />
    </GridItem>
  )
}
