import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Layout from '../components/layouts/Layout'

const Home: NextPage = () => {
  return (
    <div>
      <Layout>
        <Box bg="brand.500" h="6xl">
          Welcome
        </Box>
      </Layout>
    </div>
  )
}

export default Home
