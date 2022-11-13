import Content from '@/components/careers/Content'
import HeroLayout from '@/components/layouts/HeroLayout'
import { NextPage } from 'next'

const Careers: NextPage = () => {
  return (
    <>
      <HeroLayout
        title="CAREERS CENTER"
        buttonTitle="Surf down"
        href="#careers"
      />
      <Content />
    </>
  )
}

export default Careers
