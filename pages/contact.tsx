import classnames from 'classnames'

import React from 'react'
import type { NextPage } from 'next'

import { DefaultProp } from '../types/types'

const Contact: NextPage = ({ className } : DefaultProp) => {
  return (
    <div className={classnames(className, '')}>
      Contact
    </div>
  )
}

export default Contact
