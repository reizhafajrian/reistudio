import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: 'brand.500',
      },
    },
  },
  colors: {
    brand: {
      500: '#0A0A0A',
      400: '#454545',
      300: '#AEAEAE',
      200: '#D9D9D9',
      100: '#FFFFFF',
    },
  },
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
})
