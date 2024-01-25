import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
  useToast,
} from '@chakra-ui/react'
import { useState } from 'react'
import Button from '../Button'
import SocialLinks from './SocialLinks'

const ContactForm = () => {
  const toast = useToast()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')



  const handleSubmit = async () => {
    window.open(`https://api.whatsapp.com/send?phone=+6281213465905&text=Hello%20saya%20${name}%20dengan%20email%20${email}%20${encodeURI(message)}`, '_blank')

  }

  return (
    <Grid
      gap={{ base: 6, lg: 16 }}
      id="contact"
      templateColumns={{ sm: 'repeat(2, 1fr)' }}
      maxWidth="container.xl"
      mx="auto"
      py={{ base: 4, lg: 20 }}
      pb={8}
      px={4}
    >
      <GridItem>
        <Box>
          <Heading
            as="h2"
            fontSize={{ base: 18, md: 24, lg: 42 }}
            fontWeight="extrabold"
            mb={{ base: 2, md: 4 }}
          >
            Hi, may we assist you?
          </Heading>
          <Text fontSize={{ base: 12, lg: 24 }} mb={{ base: 4, md: 12 }}>
            We are here to help you develop your business and solve your
            problem. Let’s figure the solution with us!
          </Text>
        </Box>
        <Box maxW="70%">
          <Heading
            as="h2"
            fontSize={{ base: 18, md: 24, lg: 42 }}
            fontWeight="extrabold"
            mb={{ base: 2, md: 4 }}
          >
            Contact Us
          </Heading>
          <Text fontSize={{ base: 12, lg: 24 }} mb={{ base: 4, md: 12 }}>
            Find and explore our work through social media below
          </Text>
        </Box>
        <SocialLinks black />
      </GridItem>
      <GridItem>
        <Stack gap={4}>
          <FormControl>
            <FormLabel htmlFor="name" fontSize={{ base: 14, lg: 24 }}>
              Name
            </FormLabel>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fontSize={{ base: 14, lg: 24 }}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email" fontSize={{ base: 14, lg: 24 }}>
              Email
            </FormLabel>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fontSize={{ base: 14, lg: 24 }}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="message" fontSize={{ base: 14, lg: 24 }}>
              Message
            </FormLabel>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              size="xs"
              fontSize={{ base: 14, lg: 24 }}
            />
          </FormControl>
          <Flex>
            <Button
              onClick={handleSubmit}
              title="Send message"
              variant="secondary"
              arrow
            />
          </Flex>
        </Stack>
      </GridItem>
    </Grid>
  )
}

export default ContactForm
