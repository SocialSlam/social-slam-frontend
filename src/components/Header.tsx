import * as React from 'react'
import HamburgerMenu from 'react-hamburger-menu'
// import { Logo } from './atoms';
import {SearchBar} from './SearchBar'

import './Header.scss'

export interface HeaderProps {

}
export interface HeaderState {
  open:boolean
  hideOrShowHambugerDropDown:string
}

export class Header extends React.Component<HeaderProps,HeaderState> {

  constructor(props) {
    super(props)
    this.state = {
      open: false,
      hideOrShowHambugerDropDown: 'nav',
    }
  }

  handleClick = () => {
    this.setState({open: !this.state.open})
  }

  displayMobileMenu = () => {
    return (
      <ul className='hamburgerDropDown'>
        <li>Login</li>
        <li>Register</li>
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
        {/*<Logo />*/}
        <div className="searchbar grid__column flex__item--bottom">
          <SearchBar/>
        </div>
        <div className="hamburger-nav">
          <div className="profile grid__column grid__column--2">
            <span>
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
              {this.state.open ? this.displayMobileMenu() : null}
            </span>
          </div>
        </div>
      </header>
    )
  }
}
