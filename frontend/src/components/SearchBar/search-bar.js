import React from 'react'
import { Box } from 'rebass/styled-components'
import styled from 'styled-components'

export const SearchBar = ({ ...props }) => {
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

export default SearchBar
