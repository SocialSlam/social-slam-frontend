import * as React from 'react'
import HamburgerMenu from 'react-hamburger-menu'
import { Link } from 'react-router-dom'
import { Flex, Box, FlexProps } from 'rebass/styled-components'
import { Logo } from './Logo'
import { SearchBar } from './SearchBar'
import styled from 'styled-components'
import { SideNavProps } from './SideNav'
import { GlobalStyleProps } from './Layout'

export interface HeaderProps extends FlexProps, SideNavProps {}
export interface HeaderState {
  open: boolean
  hideOrShowHambugerDropDown: string
}

const StyledHeader = styled(Flex)`
  padding-top: 10px;
`

const StyledHeaderLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }: GlobalStyleProps) => theme.colors.conture};
  margin-right: 20px;
`

export const Header: React.FC<HeaderProps> = ({
  showMenu,
  toggleMenu,
  ...props
}) => (
  <StyledHeader as="header" alignItems="center" width="100%" {...props}>
    <Box px={3}>
      <HamburgerMenu
        isOpen={showMenu}
        menuClicked={() => toggleMenu(!showMenu)}
        width={20}
        height={15}
        strokeWidth={1}
        rotate={0}
        color="black"
        borderRadius={0}
        animationDuration={0.5}
      />
    </Box>
    <Box px={3}>
      <Logo height="2em" paddingTop="8px" />
    </Box>
    <Box px={3} width={[1 / 2, 1 / 2, 1 / 2, 1 / 2, 1]}>
      <StyledHeaderLink to="/explore">Explore artists</StyledHeaderLink>
      <StyledHeaderLink to="/create">Create Event</StyledHeaderLink>
    </Box>
    <Box px={3} width={[1 / 2]} style={{ float: 'right' }}>
      <SearchBar flex="1" />
    </Box>
  </StyledHeader>
)
