import { Button, Flex } from '@chakra-ui/react'
import Image from 'next/image'

const page = [1, 2, 3, 4, 5]

const Pagination = () => {
  return (
    <Flex gap={{ base: '2', md: '4' }} justifyContent="center">
      <Button
        size={{ base: 'sm', md: 'lg' }}
        _hover={{ bgColor: 'brand.500' }}
        bgColor="brand.100"
        border="1px"
        borderColor="brand.300"
      >
        <Image
          src="/assets/icons/chevron-left.svg"
          alt="chevron-left"
          height={20}
          width={20}
        />
      </Button>
      {page.map((i) => (
        <Button
          key={i}
          bgColor="brand.100"
          border="1px"
          borderColor="brand.300"
          size={{ base: 'sm', md: 'lg' }}
          fontSize={{ base: 12, md: 14 }}
          _hover={{ bgColor: 'brand.500', color: 'brand.100' }}
        >
          {i}
        </Button>
      ))}
      <Button
        bgColor="brand.100"
        border="1px"
        borderColor="brand.300"
        size={{ base: 'sm', md: 'lg' }}
        _hover={{ bgColor: 'brand.500' }}
      >
        <Image
          src="/assets/icons/chevron-right.svg"
          alt="chevron-right"
          height={20}
          width={20}
        />
      </Button>
    </Flex>
  )
}

export default Pagination
