import * as React from 'react'
// import { Header, SideNav } from '../components'
import {Header} from './Header/Header'
import {SideNav} from './SideNav/SideNav'

export const Layout: React.FC = ({children}) => {
  return (
    <div className="container container--fluid" style={{padding: '2rem'}}>
      <SideNav/>
      <Header/>
      <main className="mastcont">{children}</main>
    </div>
  )
}
