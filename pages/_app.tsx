import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from '../components/Head'
import Footer from '../components/Footer'
import Background from '../blackhole/BlackHoleApp'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
      <Head />

      <main className='z-10 absolute text-white font-sans'>
        <Component {...pageProps} />
      </main>

      <Footer className='z-10 hidden bottom-20 absolute text-white font-sans sm:flex sm:inset-x-1/2 sm:-translate-x-[50px] lg:transform-none lg:inset-x-auto lg:right-36'/>

      <Background />
  </>
}

export default MyApp
