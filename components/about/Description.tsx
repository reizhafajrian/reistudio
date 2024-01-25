import { Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'

const Description = () => {
  return (
    <Grid
      columnGap={{ base: 6, lg: 10 }}
      templateColumns={{ sm: 'repeat(2, 1fr)' }}
      maxWidth="container.xl"
      mx="auto"
      my={{ base: 6, lg: 60 }}
      px={{ base: 4, lg: 0 }}
    >
      <GridItem
        pos="relative"
        mx="auto"
        h="full"
        w={{ base: '60%', md: '75%', lg: 'full' }}
        minH={{ base: '36', md: '2xs', lg: 'xs' }}
        rowSpan={{ md: 2 }}
        rowStart={{ base: 2, md: 1 }}
      >
        <Image
          src="/assets/images/about_comp.png"
          alt="about"
          width={550}
          height={400}
          objectFit='cover'
        />
      </GridItem>

      <GridItem pb={{ base: 6, md: 0, lg: 6 }}>
        <Heading
          as="h2"
          fontSize={{ base: 18, md: 24, lg: 42 }}
          fontWeight="extrabold"
        >
          Rei Studio
        </Heading>
        <Text
          as="i"
          fontWeight="light"
          fontSize={{ base: 12, md: 14, lg: 32 }}
          letterSpacing="wide"
        >
          “We work to develop the best solution through technology”
        </Text>
      </GridItem>

      <GridItem
        display="flex"
        justifyContent="center"
        flexDir="column"
        colStart={{ md: 2 }}
        mt={{ base: 5, md: 0 }}
        pr={{ md: 10, lg: 0 }}
      >
        <Text fontSize={{ base: 12, lg: 24 }} letterSpacing="wide">
          At Rei Studio, we&apos;re driven by a passion to harness the power of technology in crafting bespoke solutions that propel businesses forward. Our ethos is rooted in the belief that the right technological approach can transform challenges into opportunities for growth and innovation. We specialize in developing customized software, apps, and digital platforms that are not only state-of-the-art but also intuitively aligned with our clients&apos; unique needs.

          Our team of skilled professionals brings together a wealth of expertise in cutting-edge technology, creative design, and strategic thinking. We thrive on exploring new horizons in tech, continually updating our knowledge and skills to stay ahead of the curve. From initial concept to final implementation, our focus remains steadfast: delivering solutions that are efficient, scalable, and impactful.

          Whether you&apos;re a startup looking to disrupt the market or an established enterprise seeking to optimize operations, Rei Studio is your partner in navigating the digital landscape. We&apos;re committed to turning your vision into a tangible reality, ensuring that every solution we deliver is not just a product, but a milestone in your journey of success.
        </Text>
      </GridItem>
    </Grid>
  )
}

export default Description
