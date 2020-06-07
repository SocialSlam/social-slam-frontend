import * as React from 'react'
import styled from 'styled-components'

interface PillProps {
  pillText: string
}

const StyledPill = styled.span`
  border: 2px solid $conture-color;
  padding: 0.25rem;
`
export const Pill: React.FC<PillProps> = ({ pillText }) => {
  return <StyledPill>{pillText}</StyledPill>
}
