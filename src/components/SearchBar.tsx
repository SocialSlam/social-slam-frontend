import * as React from 'react'
import { Box } from 'rebass/styled-components'
import styled from 'styled-components'

export type LogoProps = {
  flex: string
}

export const SearchBar: React.FC<LogoProps> = (props) => {
  return (
    <Box
      as="input"
      type="text"
      role="search"
      placeholder="Slams, Künstler, Kategorien finden"
      {...props}
    />
  )
}
