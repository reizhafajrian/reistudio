import About from '@/components/home/About'
import Clients from '@/components/home/Clients'
import Featured from '@/components/home/Featured'
import Hero from '@/components/home/Hero'
import Services from '@/components/home/Services'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <About />
      <Featured />
      <Services />
      <Clients />
    </>
  )
}

export default Home
