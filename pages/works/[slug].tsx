import Description from '@/components/works/details/Description'
import Hero from '@/components/works/details/Hero'
import TechStack from '@/components/works/details/TechStack'
import { Box } from '@chakra-ui/react'

const WorkDetails = () => {
  return (
    <>
      <Hero />
      <Description />
      <Box px="4">
        <Box
          borderBottom="2px"
          borderColor="brand.300"
          maxW="container.xl"
          mx="auto"
        />
      </Box>
      <TechStack />
    </>
  )
}

export default WorkDetails
