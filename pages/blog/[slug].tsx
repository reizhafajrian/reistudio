import Description from '@/components/blogs/article/Description'
import Hero from '@/components/blogs/article/Hero'
import RelatedArticles from '@/components/blogs/article/RelatedArticles'
import { Box } from '@chakra-ui/react'

const Article = () => {
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
      <RelatedArticles />
    </>
  )
}

export default Article
