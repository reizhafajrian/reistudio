import Description from '@/components/careers/details/Description'
import Hero from '@/components/careers/details/Hero'
import Skills from '@/components/careers/details/Skills'
import { Box } from '@chakra-ui/react'

const CareerDetails = () => {
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
      <Skills />
    </>
  )
}

export default CareerDetails
