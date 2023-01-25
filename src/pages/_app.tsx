import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
      <Head>
        <title>Get accurate stock market information</title>
        <link rel="shortcut icon" href="icon.png" type="image/x-icon" />
      </Head>
    </>
  )
}
