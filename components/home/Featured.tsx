import { Box, Flex, Grid, Heading, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Button from '../Button'
import FeaturedCard from '../works/FeaturedCard'

const Featured = () => {
  const router = useRouter()
  return (
    <Box
      px={4}
      mb={12}
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
        FEATURED WORKS
      </Heading>
      <Text fontSize={{ base: 12, lg: 24 }} mb={{ base: 4, md: 12 }}>
        We proudly present our latest featured works
      </Text>
      <Grid
        mb={{ base: 6, md: 9 }}
        templateColumns={{ md: 'repeat(2, 1fr)' }}
        gap={{ base: 4, lg: 6 }}
      >
        <FeaturedCard router='kultra' bgImageUrl="/assets/images/kultra.png" />
        <FeaturedCard router='alojiwa' bgImageUrl="/assets/images/alojiwa.png" />
        {/* <FeaturedCard bgImageUrl="/assets/images/featured3.png" />
        <FeaturedCard bgImageUrl="/assets/images/featured4.png" /> */}
      </Grid>
      <Flex justifyContent="center">
        <Button
          onClick={() => router.replace('/works')}
          title="See more"
          variant="secondary"
          arrow
        />
      </Flex>
    </Box>
  )
}

export default Featured
