import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from '../components/Head'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
      <Head />

      <main>
        <Component {...pageProps} />
      </main>

      <Footer />
    </>
}

export default MyApp
