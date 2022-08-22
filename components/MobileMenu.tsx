import classNames from 'classnames'

import React, { useState } from 'react'
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
    
    const mobileMenuNavStyles = useSpring({
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
                        <animated.nav style={ mobileMenuNavStyles } className='flex flex-col items-center font-light text-3xl -my-5'>
                            {navItems.map(item => 
                                router.pathname != item.href 
                                ?
                                <Link href={item.href} key={item.id} >
                                    <a className='my-5' onClick={() => setIsOpen(false)}>{item.title}</a>
                                </Link>
                                : <span key={item.id} className='my-5 border-b'>{item.title}</span>
                            )}
                        </animated.nav>
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