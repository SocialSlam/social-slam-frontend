import * as React from 'react'
import styled from 'styled-components'

export interface GenericListProps {
  header: string
  [prop: string]: any
}

const StyledGenericList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  overflow-x: scroll;
  margin-top: 10px;
`

export const GenericList: React.FC<GenericListProps> = ({
  header,
  children,
  ...rest
}) => {
  return (
    <StyledGenericList {...rest}>
      <h3>{header}</h3>
      <div className="generic-list">{children}</div>
    </StyledGenericList>
  )
}
