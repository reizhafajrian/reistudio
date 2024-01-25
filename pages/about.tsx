import Description from '@/components/about/Description'
import Statistic from '@/components/about/Statistic'
import WhyUs from '@/components/about/WhyUs'
import HeroLayout from '@/components/layouts/HeroLayout'
import { NextPage } from 'next'

const About: NextPage = () => {
  return (
    <>
      <HeroLayout
        title="ABOUT US"
        subtitle="We are here to help you find the best way to provide your best services with simplest solution through software and technology!"
      />
      <Statistic />
      <Description />
      <WhyUs />
      {/* <Team /> */}
    </>
  )
}

export default About
