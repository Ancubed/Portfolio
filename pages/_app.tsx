import '../styles/globals.css'

import React from 'react'
import { useRouter } from 'next/router'

import Head from '../components/Head'
import Menu from '../components/Menu'
import MobileMenu from '../components/MobileMenu'
import AncubedLogo from '../components/AncubedLogo'
import LangChanger from '../components/LangChanger'

import Background from '../blackhole/BlackHoleApp'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter()

    return <>
        <Head />

        <header className='z-50 absolute w-full select-none text-white font-sans lg:w-fit'>
            <Menu className='hidden sm:relative sm:top-20 sm:flex sm:justify-center sm:w-full lg:w-fit lg:inset-x-36' />
            <MobileMenu className='sm:hidden' />
        </header>

        <Component {...pageProps} className='z-40 absolute left-auto w-full p-11 select-none text-white font-sans sm:p-0 lg:w-fit lg:left-36 lg:block' />

        <footer className={`${router.pathname != '/' ? 'hidden ' : ''}z-40 absolute top-24 inset-x-1/2 translate-x-[3px] select-none text-white font-sans sm:bottom-20 sm:top-auto sm:flex sm:-translate-x-[67px] lg:right-36 lg:transform-none lg:inset-x-auto`}>
            <AncubedLogo />
        </footer>


        <LangChanger className='z-40 absolute bottom-5 text-white font-sans inset-x-1/2 -ml-[20px] sm:-ml-[20px] lg:-ml-[10px]' />

        <Background pathname={router.pathname}/>
    </>
}

export default MyApp
