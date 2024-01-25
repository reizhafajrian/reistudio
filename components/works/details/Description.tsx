import { Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { IWorks, works } from './Hero'

const Description = () => {
  const router = useRouter()
  const slug = router.query.slug as keyof IWorks;
  const project = works?.[slug]




  return (
    <Grid
      columnGap={{ base: 6, lg: 10 }}
      templateColumns={{ sm: 'repeat(2, 1fr)' }}
      my={{ base: 6, lg: 36 }}
      maxWidth="container.xl"
      mx="auto"
      px="4"
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
          style={{ objectFit: 'contain' }}
          src={`${project?.image}`}
          width={100}
          height={100}
          alt="kultra"
          layout='fill'
        />
      </GridItem>

      <GridItem
        pb={{ base: 6, md: 0, lg: 6 }}
        justifyContent="end"
        display="flex"
        flexDir="column"
        gap={{ md: 2, lg: 5 }}
      >
        <Heading
          as="h2"
          fontSize={{ base: 18, md: 24, lg: 42 }}
          fontWeight="extrabold"
        >
          {project?.name}
        </Heading>
        <Text
          as="i"
          fontWeight="light"
          fontSize={{ base: 12, md: 14, lg: 32 }}
          letterSpacing="wide"
        >
          {project?.short_desc}
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
        <Text
          mb={{ base: 2, lg: 5 }}
          fontSize={{ base: 12, lg: 24 }}
          letterSpacing="wide"
        >
          {project?.desc}
        </Text>
        {/* <Button title="Visit site" variant="secondary" arrow /> */}
      </GridItem>
    </Grid>
  )
}

export default Description
