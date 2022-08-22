import classnames from 'classnames'

import React from 'react'
import type { NextPage } from 'next'

import { DefaultProp } from '../types/types'

const About: NextPage = ({ className } : DefaultProp) => {
  return (
    <div className={classnames(className, '')}>
      About
    </div>
  )
}

export default About
