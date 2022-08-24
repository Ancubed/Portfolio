import classnames from 'classnames'

import React from 'react'
import { useSpring, useSprings, animated } from 'react-spring'

import type { NextPage } from 'next'

import { DefaultProp } from '../types/types'

import socialMedia from '../constants/socialMedia'

import useLangStore from '../hooks/useLangStore'

const commonOpacityProps = {
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  },
  config: {
    duration: 500
  }
}

const Home: NextPage = ({ className }: DefaultProp) => {
  const enLang = useLangStore((store) => store.enLang)

  const nameStyles = useSpring({
    delay: 200,
    ...commonOpacityProps
  })

  const postStyles = useSpring({
    delay: 450,
    ...commonOpacityProps
  })

  const socialMediaSprings = useSprings(
    socialMedia.length,
    socialMedia.map((_, idx) => ({
      delay: 800 + 400 * idx,
      ...commonOpacityProps,
      config: {
        duration: 800
      }
    }))
  )

  return (
    <>
      <div className={classnames(className, 'bottom-28 flex flex-col items-center sm:bottom-auto sm:top-36 lg:-translate-y-1/4 lg:top-1/2')}>
        <animated.h1 style={nameStyles} className='w-max text-[40px] leading-10 font-bold sm:text-[64px] lg:text-8xl sm:leading-[74px] lg:leading-[110px]'>
          {enLang ? 'Andrew Antonov' : 'Андрей Антонов'}
        </animated.h1>
        <animated.span style={postStyles} className='text-[32px] font-light sm:text-4xl lg:text-[40px]'>
          {enLang ? 'Fullstack developer' : 'Fullstack-разработчик'}
        </animated.span>
      </div>
      <div className={classnames(className, 'flex justify-center h-min font-light text-xl bottom-[60px] sm:text-3xl sm:bottom-52 lg:bottom-20 lg:-mx-[12.5px]')}>
        {socialMediaSprings.map((style, smIdx) =>
          <animated.a style={style} key={socialMedia[smIdx].id} className="mx-[12.5px]" href={socialMedia[smIdx].href} target='_blank'>
            {socialMedia[smIdx].title}
          </animated.a>
        )}
      </div>
    </>
  )
}

export default Home