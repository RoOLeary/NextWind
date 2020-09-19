import '../styles/index.css'
import Head from 'next/head'
import { ModalContextProvider } from './../contexts/modalContext';

function NextWind({ Component, pageProps }) {
  return (
      <>
      <Head>
        <title>RO|NEXT|WND</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ModalContextProvider>
        <Component {...pageProps} />
      </ModalContextProvider>
      </>
    )
}

export default NextWind
