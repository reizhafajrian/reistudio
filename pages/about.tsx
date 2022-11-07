import Description from '@/components/about/Description'
import Hero from '@/components/about/Hero'
import Statistic from '@/components/about/Statistic'
import Team from '@/components/about/Team'
import WhyUs from '@/components/about/WhyUs'
import { NextPage } from 'next'

const About: NextPage = () => {
  return (
    <>
      <Hero />
      <Statistic />
      <Description />
      <WhyUs />
      <Team />
    </>
  )
}

export default About
