import HeroLayout from '@/components/layouts/HeroLayout'
import Methodology from '@/components/services/Methodology'
import Services from '@/components/services/Services'
import Technology from '@/components/services/Technology'
import { Box } from '@chakra-ui/react'
import { NextPage } from 'next'

const ServicesPage: NextPage = () => {
  return (
    <>
      <HeroLayout
        title="OUR SERVICES"
        buttonTitle="Get free consultation here"
        href="#contact"
      />
      <Services />
      <Technology />
      <Box
        display={{ base: 'none', md: 'block' }}
        borderBottom="2px"
        borderColor="brand.300"
        maxW="container.xl"
        mx="auto"
        mt={28}
        mb={16}
      />
      <Methodology />
    </>
  )
}

export default ServicesPage
