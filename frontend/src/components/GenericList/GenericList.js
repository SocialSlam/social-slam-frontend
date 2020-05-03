import React from 'react'

import './GenericList.scss'

export function GenericList({ header, children, ...rest }) {
  return (
    <div {...rest}>
      <h3>{header}</h3>
      <div className="generic-list">{children}</div>
    </div>
  )
}

export default GenericList
