import React from 'react'
import PropTypes from  'prop-types'

import './pill.scss'

export function Pill({ pillText }) {
  return (
    <span className="pill">
       { pillText }
    </span>
  )
}

Pill.propTypes = {
  pillText: PropTypes.string
}

export default Pill
