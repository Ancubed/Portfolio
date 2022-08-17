import classNames from 'classnames'
import type { FunctionComponent } from 'react'

import Link from 'next/link'

import { DefaultProp } from '../types/types'

const FooterWrapper: FunctionComponent<DefaultProp> = ({ className }: DefaultProp) => {
    return (
        <footer className={classNames(className, '')}>
            <Link href='https://github.com/Ancubed'>
                <a target='_blank' className='flex flex-col sm:items-center lg:items-end'>
                    <span className='text-2xl leading-[28px] font-light whitespace-nowrap'>Powered by</span>
                    <div className='flex items-start font-bold'>
                        <span className='text-6xl leading-[69px]'>AN</span>
                        <span className='text-[20px]'>3</span>
                    </div>
                </a>
            </Link>
        </footer>
    )
}

export default FooterWrapper