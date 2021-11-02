import '../styles/index.css'
import Head from 'next/head'
import { ModalContextProvider } from './../contexts/modalContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

function NextWind({ Component, pageProps }) {
  return (
      <>
        <Head>
          <title>Ronan O'Leary | Web Developer</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <motion.div
          initial="initial"
          animate="animate"
          variants={{
            initial: {
              opacity: 0,
            },
            animate: {
              opacity: 1,
            },
          }}
        >
        <ModalContextProvider>
          <Component {...pageProps} />
        </ModalContextProvider>
        </motion.div>
      </>
    )
}

export default NextWind
