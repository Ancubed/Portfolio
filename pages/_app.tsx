import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from '../components/Head'
import Footer from '../components/Footer'
import Background from '../blackhole/BlackHoleApp'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
      <Head />

      <main className=''>
        <Component {...pageProps} />
      </main>

      <Footer />

      <Background />
  </>
}

export default MyApp
