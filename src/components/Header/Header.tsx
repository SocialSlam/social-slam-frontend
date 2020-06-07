import * as React from 'react'
import HamburgerMenu from 'react-hamburger-menu'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Flex, Box, FlexProps } from 'rebass/styled-components'

import { Logo } from '../Logo'
import { SearchBar } from '../SearchBar'

import './Header.scss'
import { SideNavProps } from '../SideNav'

export interface HeaderProps extends FlexProps, SideNavProps {}
export interface HeaderState {
  open: boolean
  hideOrShowHambugerDropDown: string
}

export const Header: React.FC<HeaderProps> = ({
  showMenu,
  toggleMenu,
  ...props
}) => (
  <Flex as="header" alignItems="center" width="100%" {...props}>
    <Box px={3}>
      <HamburgerMenu
        isOpen={showMenu}
        menuClicked={() => toggleMenu(!showMenu)}
        width={18}
        height={15}
        strokeWidth={1}
        rotate={0}
        color="black"
        borderRadius={0}
        animationDuration={0.5}
      />
    </Box>
    <Box px={3}>
      <Logo height="3em" />
    </Box>
    <Box px={3}>
      <Link to="/explore">Explore artists</Link>
      <Link to="/create">Create Event</Link>
    </Box>
    <Box px={3}>
      <SearchBar flex="1" />
    </Box>
  </Flex>
)
