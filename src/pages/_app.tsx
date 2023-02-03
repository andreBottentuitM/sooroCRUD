import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

const colors = {
    brand: {
      dark_blue:'#120d39',
      blue: '#1c1458',
      green: '#2a69ac',
    }
}

const theme = extendTheme({ colors })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
<Component {...pageProps} />
<style jsx global>{`
  body {
    background-color: #120d38;
  }
`}</style>
    </ChakraProvider>
  )
}
