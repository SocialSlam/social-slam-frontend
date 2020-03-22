import React from 'react'

import logo from '../react.svg'

function Header() {
  return (
    <header className="masthead grid grid--justify-center grid--center">
      <div className="logo grid__column grid__column--1">
        <img src={logo} className="Home-logo" alt="logo" />
      </div>
      <div className="searchbar grid__column">
        <span>Here be search</span>
      </div>
      <div className="profile grid__column grid__column--2">
        <span>Here be register/login</span>
      </div>
    </header>
  )
}

export default Header
