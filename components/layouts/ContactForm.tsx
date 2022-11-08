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
import axios from 'axios'
import { useState } from 'react'
import Button from '../Button'
import SocialLinks from './SocialLinks'

const ContactForm = () => {
  const toast = useToast()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [loading, setLoading] = useState(false)

  const check = name.length > 0 && email.length > 0 && message.length > 0

  const handleSubmit = async () => {
    const data = { name, email, message }
    try {
      if (check) {
        setLoading(true)

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
          const res: any = await axios.post('/api/message', data)
          setLoading(false)

          setName('')
          setEmail('')
          setMessage('')
          toast({
            position: 'top',
            title: res.data.message,
            status: 'success',
          })
        } else {
          throw new Error('Invalid Email Address')
        }
      } else {
        throw new Error('Please input all form')
      }
    } catch (error: any) {
      setLoading(false)
      toast({
        position: 'top',
        title: error.message,
        status: 'error',
      })
    }
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
              disabled={loading}
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
              disabled={loading}
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
              disabled={loading}
            />
          </FormControl>
          <Flex>
            <Button
              onClick={handleSubmit}
              title="Send message"
              variant="secondary"
              isLoading={loading}
              arrow
            />
          </Flex>
        </Stack>
      </GridItem>
    </Grid>
  )
}

export default ContactForm
