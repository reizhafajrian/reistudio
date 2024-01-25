import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
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
        <ServiceItem image="services_webdev" service_name="Web Development" />
        <ServiceItem image="services_webapp" service_name="Web App" />
        <ServiceItem image="services_mobileapp" service_name="Mobile App" />
      </Grid>
    </Box>
  )
}

export default Services

export const ServiceItem = ({ image, service_name }: { image: string; service_name: string; }) => {
  const router = useRouter()
  return (
    <GridItem
      onClick={() => router.replace('/services')}
      pos="relative"
      minH={{ base: 'xs', md: '2xs', lg: 'sm' }}
      borderRadius={20}
      overflow={"hidden"}
    >
      <Image style={{ zIndex: 1 }} src={`/assets/images/${image}.png`} alt={image} layout='fill' objectFit='cover' />
      <Text color={"white"} left={4} bottom={5} position={"absolute"} zIndex={10} fontSize={"2xl"} fontWeight={"bold"}>{service_name}</Text>
    </GridItem>
  )
}
