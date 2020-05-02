import React from 'react'
import HamburgerMenu from 'react-hamburger-menu'
import { connect } from 'react-redux'
import { Flex } from 'rebass/styled-components'

import { actions as appActions } from '../redux/modules/app'
import { selectors } from '../redux/selectors'

import { Logo } from './Logo'
import SearchBar from './SearchBar'

const Header = ({ dropDown, toggleDropDown }) => (
  <Flex as="header" justifyContent="center" width="100%">
    <Logo height="3em" />
    <HamburgerMenu
      isOpen={dropDown}
      menuClicked={() => toggleDropDown()}
      width={18}
      height={15}
      strokeWidth={1}
      rotate={0}
      color="black"
      borderRadius={0}
      animationDuration={0.5}
    />
    <SearchBar flex="1" />
    {dropDown && (
      <ul className="hamburgerDropDown">
        <li>Login</li>
        <li>Register</li>
      </ul>
    )}
  </Flex>
)

const mapStateToProps = (state) => ({
  dropDown: selectors.app.menu(state),
})

const mapDispatchToProps = {
  toggleDropDown: appActions.toggleMenu,
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
