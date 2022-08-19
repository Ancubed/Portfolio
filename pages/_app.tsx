import '../styles/globals.css'

import React from 'react'

import Head from '../components/Head'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import MobileMenu from '../components/MobileMenu'
import Background from '../blackhole/BlackHoleApp'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {

  return <>
      <Head />

      <main className='z-10 absolute text-white font-sans w-full' >
        <Menu className='hidden sm:flex sm:relative sm:top-20 sm:justify-center sm:w-full lg:w-min lg:inset-x-36'/>
        <MobileMenu className='sm:hidden'/>
        <Component {...pageProps} />
      </main>

      <Footer className='z-10 hidden bottom-20 absolute text-white font-sans sm:flex sm:inset-x-1/2 sm:-translate-x-[50px] lg:transform-none lg:inset-x-auto lg:right-36'/>

      <Background />
  </>
}

export default MyApp
