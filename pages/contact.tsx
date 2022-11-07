import { Grid, Heading } from '@chakra-ui/react'

const Contact = () => {
  return (
    <Grid bgColor="brand.500" color="brand.100" placeItems="center" minH="50vh">
      <Heading
        as="h1"
        fontSize={{ base: 16, md: 28, lg: 40, '2xl': 52 }}
        fontWeight="extrabold"
        letterSpacing="widest"
        mb={6}
      >
        CONTACT US
      </Heading>
    </Grid>
  )
}

export default Contact
