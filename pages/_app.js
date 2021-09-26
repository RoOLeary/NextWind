import '../styles/index.css'
import Head from 'next/head'
import { ModalContextProvider } from './../contexts/modalContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

function NextWind({ Component, pageProps }) {
  return (
      <>
        <Head>
          <title>Ronan O'Leary | Web Developer</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <ModalContextProvider>
          <Component {...pageProps} />
        </ModalContextProvider>
      </>
    )
}

export default NextWind
