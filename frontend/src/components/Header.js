import React from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import { NavLink } from 'react-router-dom';

import { Logo } from './atoms';
import SearchBar from './SearchBar';

import './Header.scss';


class Header extends React.Component {

  constructor(){
      super()
      this.state = {
          open: false,
          hideOrShowHambugerDropDown: 'nav'
      }
  }

  handleClick = () => {
    this.setState({open: !this.state.open});
  }

  displayMobileMenu = () => {
      return (
          <ul className='hamburgerDropDown'>
                  <li className='nav-link'><NavLink to='#' >Login</NavLink></li>
                  <li className='nav-link'><NavLink to='#'>Register</NavLink></li>
              </ul>
      )
  }

    displayHamburgerMenu = () => {
      return (
          <HamburgerMenu
                  isOpen={this.state.open}
                  menuClicked={this.handleClick.bind(this)}
                  width={18}
                  height={15}
                  strokeWidth={1}
                  rotate={0}
                  color='white'
                  borderRadius={0}
                  animationDuration={0.5}
              />
      )
  }

  render() {
    return (
      <header className="masthead grid grid--justify-center grid--center">
        <Logo />
        <div className="searchbar grid__column flex__item--bottom">
          <SearchBar />
        </div>
        <div className="hamburger-nav">
          <HamburgerMenu
                  isOpen={this.state.open}
                  menuClicked={this.handleClick.bind(this)}
                  width={18}
                  height={15}
                  strokeWidth={1}
                  rotate={0}
                  color='black'
                  borderRadius={0}
                  animationDuration={0.5}
              />
          { this.state.open ?  this.displayMobileMenu() : null}
        </div>
      </header>
    )
  }
}

export default Header
