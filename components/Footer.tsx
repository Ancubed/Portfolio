import classNames from 'classnames'

import React from 'react'
import type { FunctionComponent } from 'react'

import AncubedLogo from '../components/AncubedLogo'

import { DefaultProp } from '../types/types'

const FooterWrapper: FunctionComponent<DefaultProp> = ({ className }: DefaultProp) => {
    return (
        <footer className={classNames(className, '')}>
            <AncubedLogo />
        </footer>
    )
}

export default FooterWrapper