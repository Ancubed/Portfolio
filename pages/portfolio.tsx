import classnames from 'classnames'

import React from 'react'
import type { NextPage } from 'next'

import { DefaultProp } from '../types/types'

const Portfolio: NextPage = ({ className } : DefaultProp) => {
  return (
    <div className={classnames(className, '')}>
      Portfolio 
    </div>
  )
}

export default Portfolio
