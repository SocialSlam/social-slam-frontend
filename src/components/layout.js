import React from 'react'
import propTypes from 'prop-types'

import { Header, SideNav } from '../components'

export function Layout({ children }) {
  return (
    
    <div className="container container--fluid" style={{ padding: '2rem' }}>
      <SideNav />
      <Header />
      <main className="mastcont">{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: propTypes.node.isRequired,
}

export default Layout
