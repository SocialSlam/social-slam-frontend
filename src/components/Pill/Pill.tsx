import * as React from 'react'

import './Pill.scss'

interface PillProps {
  pillText: string
}

export const Pill: React.FC<PillProps> = ({ pillText }) => {
  return <span className="pill">{pillText}</span>
}
