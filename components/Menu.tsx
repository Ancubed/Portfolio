import classNames from 'classnames'

import React from 'react'
import { useRouter } from 'next/router'

import type { FunctionComponent } from 'react'

import Link from 'next/link'

import { DefaultProp } from '../types/types'

import navItems from '../constants/navItems'

const Menu: FunctionComponent<DefaultProp> = ({ className }: DefaultProp) => {
  const router = useRouter()

  return (
    <nav className={classNames(className, 'font-light text-3xl -mx-6')}>
      {navItems.map(item =>
        router.pathname != item.href
          ?
          <Link href={item.href} key={item.id}>
            <a className='mx-6'>{item.title}</a>
          </Link>
          : <span key={item.id} className='mx-6 border-b'>{item.title}</span>
      )}
    </nav>
  )
}

export default Menu