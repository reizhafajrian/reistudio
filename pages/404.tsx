import { Heading, Stack } from '@chakra-ui/react'

const NotFound = () => {
  return (
    <>
      <Stack
        bgColor="brand.500"
        color="brand.100"
        h="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <Heading fontSize="8xl">404</Heading>
        <Heading>Page Not Found</Heading>
      </Stack>
    </>
  )
}

export default NotFound
