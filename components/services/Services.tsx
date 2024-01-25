import { Box, Grid, Heading, Text } from '@chakra-ui/react'
import { ServiceItem } from '../home/Services'

const Services = () => {
  return (
    <Box
      px={4}
      mx="auto"
      py={{ base: 12, md: 28 }}
      maxWidth="container.xl"
      textAlign={{ md: 'center' }}
    >
      <Box display={{ base: 'block', md: 'none' }}>
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
      </Box>

      <Grid
        mb={{ base: 6, md: 9 }}
        templateColumns={{ md: 'repeat(3, 1fr)' }}
        gap={{ base: 4, lg: 6 }}
      >
        <ServiceItem image="services_webdev" service_name="Web Development" />
        <ServiceItem image="services_webapp" service_name="Web App" />
        <ServiceItem image="services_mobileapp" service_name="Mobile App" />
      </Grid>
    </Box>
  )
}

export default Services
