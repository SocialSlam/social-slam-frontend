import React from 'react'

import { Logo } from './atoms'
import SearchBar from './SearchBar'

function Header() {
  return (
    <header className="masthead grid grid--justify-center grid--center">
      <Logo />
      <div className="searchbar grid__column">
        <SearchBar />
      </div>
      <div className="profile grid__column grid__column--2">
        <span>Here be register/login</span>
      </div>
    </header>
  )
}

export default Header
