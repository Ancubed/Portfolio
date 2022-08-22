import classNames from 'classnames'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSpring, useTransition, animated } from 'react-spring'
import type { FunctionComponent } from 'react'

import Link from 'next/link'

import { DefaultProp } from '../types/types'

import AncubedLogo from '../components/AncubedLogo'

import navItems from '../constants/navItems'

const MobileMenu: FunctionComponent<DefaultProp>  = ({ className } : DefaultProp) => {
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)

    const mobileMenuTransition = useTransition(isOpen, { 
        from: { height: '0vh' },
        enter: { height: '100vh' },
        leave: { height: '0vh' },
        config: {
            mass: 5,
            duration: 250
        }
    })
    
    const mobileMenuItemsStyles = useSpring({
        display: isOpen ? 'flex' : 'none',
        delay: 100,
        config: {
            mass: 5,
            duration: 100
        }
    });

    return (
        <div className={classNames(className, '')}>
            { 
                mobileMenuTransition((mobileMenuStyles, item) => 
                    item && 
                    <animated.div style={mobileMenuStyles} className={classNames(className, 'w-full h-screen flex flex-col items-center bg-black py-20 justify-between')}>
                        <AncubedLogo />
                        <nav className='flex flex-col items-center font-light text-3xl -my-5'>
                            {navItems.map(item => 
                                router.pathname != item.href 
                                ?
                                <Link href={item.href} key={item.id} >
                                    <animated.a style={ mobileMenuItemsStyles} className='my-5' onClick={() => setIsOpen(false)}>{item.title}</animated.a>
                                </Link>
                                : <animated.span style={ mobileMenuItemsStyles } key={item.id} className='my-5 border-b'>{item.title}</animated.span>
                            )}
                        </nav>
                        <button className='font-light text-3xl' onClick={() => setIsOpen(false)}>
                            Close
                        </button>
                    </animated.div>
                )
            }
            {   !isOpen &&
                <button className='font-light text-3xl w-full justify-center mt-10' onClick={() => setIsOpen(true)}>
                    Menu
                </button>
            }
        </div>
    )
  }
  
  export default MobileMenu