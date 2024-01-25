import Description from '@/components/works/details/Description'
import Hero, { IWorks } from '@/components/works/details/Hero'
import TechStack from '@/components/works/details/TechStack'
import { Box } from '@chakra-ui/react'
import { useRouter } from 'next/router'
// import { useParams } from 'next/navigation'



const WorkDetails = () => {
  const router = useRouter()
  const slug = router.query.slug as keyof IWorks;
  if (!slug) {
    // You can render a loader, placeholder, or return null
    return null
  }
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
