import classnames from 'classnames'

import React from 'react'
import type { NextPage } from 'next'

import { DefaultProp } from '../types/types'

const Home: NextPage = ({ className } : DefaultProp) => {
  return (
    <>
      <div className={classnames(className, 'bottom-32 flex flex-col items-center sm:bottom-auto sm:top-36 lg:-translate-y-1/4 lg:top-1/2')}>
        <h1 className='w-max text-[40px] leading-10 font-bold sm:text-[64px] lg:text-8xl sm:leading-[74px] lg:leading-[110px]'>Andrew Antonov</h1>
        <span className='text-[32px] sm:text-4xl lg:text-[40px]'>Fullstack developer</span>
      </div>
      <div className={classnames(className, 'flex justify-center h-min font-light text-2xl bottom-[60px] sm:text-3xl sm:bottom-52 lg:bottom-20')}>
          <a className="mr-[12.5px]" href="https://github.com/ancubed" target='_blank'>Github</a>
          <a className="mx-[12.5px]" href="https://instagram.com/_ancubed_" target='_blank'>Instagram</a>
          <a className="ml-[12.5px]" href="https://t.me/ancubed" target='_blank'>Telegram</a>
      </div>
    </>
  )
}

export default Home
