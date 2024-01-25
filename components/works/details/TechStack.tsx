import {
  Box,
  Grid,
  GridItem,
  Heading,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { IWorks, works } from './Hero';

const TechStack = () => {
  const router = useRouter()
  const slug = router.query.slug as keyof IWorks;
  const project = works?.[slug]
  return (
    <Grid
      columnGap={{ base: 6, lg: 10 }}
      templateColumns={{ sm: 'repeat(2, 1fr)' }}
      mt={{ base: 6, lg: 20 }}
      mb={{ base: 36, lg: 72 }}
      gap="4"
      maxWidth="container.xl"
      mx="auto"
      px="4"
    >
      <GridItem>
        <Heading
          as="h2"
          mb={{ base: 2, md: 4, lg: 10 }}
          fontSize={{ base: 18, md: 24, lg: 42 }}
          fontWeight="extrabold"
        >
          <Box display={{ base: 'inline', md: 'none' }} mr="4">
            ⬜
          </Box>
          Deliverables
        </Heading>
        <UnorderedList fontSize={{ md: 18, lg: 32 }} ml={{ base: 6, lg: 12 }}>
          <ListItem>UI/UX Design</ListItem>
          <ListItem>Website</ListItem>
          <ListItem>Cloud Hosting</ListItem>
          <ListItem>Support Maintenance</ListItem>
        </UnorderedList>
      </GridItem>
      <GridItem>
        <Heading
          as="h2"
          mb={{ base: 2, md: 4, lg: 10 }}
          fontSize={{ base: 18, md: 24, lg: 42 }}
          fontWeight="extrabold"
        >
          <Box display={{ base: 'inline', md: 'none' }} mr="4">
            ⬜
          </Box>
          Technologies
        </Heading>
        <UnorderedList fontSize={{ md: 18, lg: 32 }} ml={{ base: 6, lg: 12 }}>
          {
            project.tech.technologies.map(res => (<ListItem key={res}>{res}</ListItem>))
          }
        </UnorderedList>
      </GridItem>
    </Grid>
  )
}

export default TechStack
