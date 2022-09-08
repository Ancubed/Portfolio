import classnames from 'classnames'
import axios from 'axios'

import React, { useState } from 'react'
import { useTransition, useSprings, animated } from 'react-spring'
import type { NextPage } from 'next'

import { DefaultProp } from '../types/types'

import useLangStore from '../hooks/useLangStore'

const plugsForFormItems = [0, 1, 2, 3, 4, 5] // Заглушки для анимаций

const Contact: NextPage = ({ className }: DefaultProp) => {
  const enLang = useLangStore((store) => store.enLang)

  const [success, setSuccess] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [question, setQuestion] = useState('')

  const transition = useTransition(success, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 200
  })

  const inputSprings = useSprings(
    plugsForFormItems.length,
    plugsForFormItems.map((_, idx) => ({
      delay: 550 + 200 * idx,
      from: {
        opacity: 0
      },
      to: {
        opacity: 1
      },
      config: {
        duration: 700
      }
    }))
  )

  const handleSubmit = async (event: React.FormEvent) => {
    try {
      event.preventDefault()
      let result = await axios.post('/api/contact', {
        name, 
        email, 
        question
      })
      setSuccess(true)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      {transition((style, item) => 
        item ? <animated.div
            style={style}
            className={classnames(className, 'flex flex-col items-center w-full -translate-y-2/4 top-1/2 sm:max-w-md sm:left-1/2 sm:-translate-x-2/4 lg:left-1/2 lg:-translate-x-2/4')}>
            {enLang ? 'I will write to you soon' : 'Я напишу Вам в ближайшее время'}
          </animated.div>
        : <animated.form
            style={style}
            className={classnames(className, 'flex flex-col items-center w-full -translate-y-2/4 top-1/2 sm:max-w-md sm:left-1/2 sm:-translate-x-2/4 lg:left-1/2 lg:-translate-x-2/4')}
            onSubmit={handleSubmit}
            autoComplete="off">
            <animated.h1 
              style={inputSprings[0]} 
              className='text-[30px] leading-[37px] font-bold text-center'>
              {enLang ? 'Contact me' : 'Свяжитесь со мной'}
            </animated.h1>
            <div className='my-10 font-light text-3xl'>
              <animated.input
                style={inputSprings[1]}
                type="text"
                name="name"
                id="name"
                placeholder={enLang ? 'Name' : 'Имя'}
                maxLength={56}
                minLength={2}
                onChange={e => setName(e.target.value)}
                value={name}
                className='w-full text-center bg-transparent focus:outline-none focus:caret-transparent focus:border-x'
                required={true}>
              </animated.input>
              <animated.input
                style={inputSprings[2]}
                type="email"
                name="email"
                id="email"
                placeholder={enLang ? 'Email' : 'Почта'}
                maxLength={56}
                minLength={3}
                onChange={e => setEmail(e.target.value)}
                value={email}
                className='my-7 w-full text-center bg-transparent focus:outline-none focus:caret-transparent focus:border-x'
                required={true}>
              </animated.input>
              <animated.textarea
                style={inputSprings[3]}
                name="question"
                id="question"
                placeholder={enLang ? 'Question' : 'Вопрос'}
                minLength={5}
                maxLength={256}
                onChange={e => setQuestion(e.target.value)}
                value={question}
                className='w-full text-center bg-transparent focus:outline-none focus:caret-transparent focus:border-x no-scrollbar'
                required={true}>
              </animated.textarea>
              <animated.button
                style={inputSprings[4]}
                type="submit"
                className='mt-7 w-full border focus:outline-none cursor-pointer hover:animate-pulse relative overflow-x-hidden'>
                {enLang ? 'Send' : 'Отправить'}
              </animated.button>
            </div>
            <animated.a
              style={inputSprings[5]}
              href="http://t.me/ancubed"
              target="_blank"
              className='block font-light text-center hover:animate-pulse'>
              {enLang ? 'Or text me in telegram' : 'Или напишите мне в  телеграм'}
            </animated.a>
          </animated.form>
      )}
    </>
  )
}

export default Contact
