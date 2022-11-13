import HeroLayout from '@/components/layouts/HeroLayout'
import Content from '@/components/works/Content'
import { NextPage } from 'next'

const Works: NextPage = () => {
  return (
    <>
      <HeroLayout title="OUR WORKS" buttonTitle="Surf down" href="#works" />
      <Content />
    </>
  )
}

export default Works
