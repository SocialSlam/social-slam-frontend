import React from 'react';

import './GenericList.scss'

export function GenericList({ header, children }) {
  return (
    <div>
      <h3>{header}</h3>
      <div className="generic-list">
        {children}
      </div>
    </div>
  )
}

export default GenericList
