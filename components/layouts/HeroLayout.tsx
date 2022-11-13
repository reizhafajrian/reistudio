import { Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Button from '../Button'

interface Props {
  title: string
  buttonTitle?: string
  subtitle?: string
  href?: string
}

const HeroLayout = (props: Props) => {
  const router = useRouter()
  return (
    <Grid
      placeItems="center"
      textAlign="center"
      bgColor="brand.500"
      color="brand.100"
      h={{ base: '40vh', lg: '60vh' }}
    >
      <GridItem>
        <Heading
          as="h1"
          fontSize={{ base: 16, md: 28, lg: 40, '2xl': 52 }}
          fontWeight="extrabold"
          letterSpacing="widest"
          mb={6}
        >
          {props.title}
        </Heading>
        {props.subtitle && (
          <Text
            fontSize={{ base: 12, lg: 24 }}
            letterSpacing="wide"
            px={{ base: 12, md: 40, lg: 96 }}
          >
            {props.subtitle}
          </Text>
        )}
        {props.buttonTitle && (
          <Button
            onClick={() => router.replace(props.href || '/')}
            title={props.buttonTitle}
            variant="primary"
            arrow
            big
          />
        )}
      </GridItem>
    </Grid>
  )
}

export default HeroLayout
