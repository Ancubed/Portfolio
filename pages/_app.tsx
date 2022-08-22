import '../styles/globals.css'

import React from 'react'

import Head from '../components/Head'
import Menu from '../components/Menu'
import MobileMenu from '../components/MobileMenu'
import AncubedLogo from '../components/AncubedLogo'

import Background from '../blackhole/BlackHoleApp'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {

  return <>
      <Head />

      <header className='z-50 absolute w-full select-none text-white font-sans lg:w-fit lg:-mx-6'>
          <Menu className='hidden sm:relative sm:top-20 sm:flex sm:justify-center sm:w-full lg:w-min lg:inset-x-36'/>
          <MobileMenu className='sm:hidden'/>
      </header>

      <Component {...pageProps} className='z-40 absolute left-auto w-full select-none text-white font-sans lg:w-fit lg:left-36 lg:block'/>

      <footer className={'z-40 absolute top-24 inset-x-1/2 translate-x-[3px] select-none text-white font-sans sm:bottom-20 sm:top-auto sm:flex sm:-translate-x-[77px] lg:right-36 lg:transform-none lg:inset-x-auto'}>
          <AncubedLogo />
      </footer>

      <Background />
  </>
}

export default MyApp
