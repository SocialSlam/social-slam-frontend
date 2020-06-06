import * as React from 'react'
import { NavLink } from 'react-router-dom'

import { routes } from '../../Router'

import './SideNav.scss'

export const SideNav = () => {
  const [isColapsed, toggle] = React.useState(true)

  let className = 'side-nav'

  if (!isColapsed) {
    className += ' side-nav__open'
  }

  return (
    <nav className={className}>
      {isColapsed ? (
        <span className="vertical-text" onClick={() => toggle(!isColapsed)}>
          Menü
        </span>
      ) : (
        <>
          <span
            className="side-nav__toggle"
            onClick={() => toggle(!isColapsed)}
          >
            &#x2B83;
          </span>
          <ul className="side-nav__list list list--unstyled">
            {routes.length > 0 &&
              routes.map(({ path, name }) => (
                <li key={path} className="list__item">
                  <NavLink
                    exact
                    to={path}
                    className="nav-link type-bold"
                    activeClassName="nav-link__active"
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
          </ul>
        </>
      )}
    </nav>
  )
}
