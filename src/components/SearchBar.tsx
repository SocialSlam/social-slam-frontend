import * as React from 'react'
import { Box, Flex } from 'rebass/styled-components'
import styled from 'styled-components'
import { GlobalStyleProps } from './Layout'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export type LogoProps = {
  flex: string
}

const StyledSearchBox = styled(Flex)`
  border-bottom: solid 1px black;
  padding: 6px 0;
  outline: none;
`

const StyledToggleIcon = styled(FontAwesomeIcon)``

const StyledSearchInput = styled(Box)`
  border: none;
  color: ${({ theme }: GlobalStyleProps) => theme.colors.conture};
  margin-right: 20px;
  :focus {
    outline: none;
  }
`

export const SearchBar: React.FC<LogoProps> = (props) => {
  return (
    <StyledSearchBox>
      <StyledSearchInput
        as="input"
        type="text"
        role="search"
        placeholder="Search"
        {...props}
      />
      <StyledToggleIcon icon={faSearch} />
    </StyledSearchBox>
  )
}
