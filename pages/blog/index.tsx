import Content from '@/components/blogs/Content'
import HeroLayout from '@/components/layouts/HeroLayout'
import { NextPage } from 'next'

const Blog: NextPage = () => {
  return (
    <>
      <HeroLayout title="ARTICLES" buttonTitle="Start reading" href="#blogs" />
      <Content />
    </>
  )
}

export default Blog
