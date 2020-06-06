import * as React from 'react'
import HamburgerMenu from 'react-hamburger-menu'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Flex, Box } from 'rebass/styled-components'

import { Logo } from '../Logo'
import { SearchBar } from '../SearchBar'
import { actions as appActions } from '../../redux/modules/app'
import { selectors } from '../../redux/selectors'

import './Header.scss'

export interface HeaderProps { }
export interface HeaderState {
  open: boolean
  hideOrShowHambugerDropDown: string
}

const Header = ({ menu, toggleMenu, ...props }) => (
  <Flex as="header" alignItems="center" width="100%" {...props}>
    <Box px={3}>
      <HamburgerMenu
        isOpen={menu}
        menuClicked={() => toggleMenu()}
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

const mapStateToProps = (state) => ({
  menu: selectors.app.menu(state),
})

const mapDispatchToProps = {
  toggleMenu: appActions.toggleMenu,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

