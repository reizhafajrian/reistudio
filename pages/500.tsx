import { Heading, Stack } from '@chakra-ui/react'

const ErrorPage = () => {
  return (
    <>
      <Stack
        bgColor="brand.500"
        color="brand.100"
        h="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <Heading fontSize="8xl">500</Heading>
        <Heading>Something Went Wrong</Heading>
      </Stack>
    </>
  )
}

export default ErrorPage
