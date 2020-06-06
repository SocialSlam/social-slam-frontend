import * as React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { routes } from '../../Router'

import { selectors } from '../../redux/selectors'
import { actions as appActions } from '../../redux/modules/app'

const StyledNav = styled.nav`
  position: absolute;
  top: 0;
  left: calc(-25% + 25px);
  bottom: 0;
  color: $base-color;
  background-color: ${({ theme }) => theme.colors.highlight};
  z-index: 1000;
  min-width: 25%;
  transition: left ease-in-out 500ms;
  .side-nav__toggle {
    position: absolute;
    right: 24px;
    top: 50px;
    font-size: 2.5rem;
    font-weight: 700;
  }
  .side-nav__list {
    margin-top: 180px;
  }
  .vertical-text {
    position: absolute;
    right: -8px;
    top: 50px;
    transform: rotate(-90deg);
  }
  &.side-nav__open {
    left: 0;
  }
  .list__item {
    margin: 2rem 4rem;
  }
`

const StyledNavLink = styled(NavLink)`
  color: $base-color;
  font-size: 2rem;
  &.nav-link__active {
    text-decoration: underline;
    text-decoration-color: $base-color;
  }
`

const SideNavComponent = ({ menu, toggleMenu }) => {
  const ref = React.createRef()

  React.useEffect(() => {
    // @ts-ignore
    ref.current.classList.toggle('side-nav__open', menu)
  }, [menu])

  // @ts-ignore
  return (
    <StyledNav ref={ref}>
      {menu ? (
        <span className="vertical-text" onClick={() => toggleMenu()}>
          Menü
        </span>
      ) : (
        <>
          <span className="side-nav__toggle" onClick={() => toggleMenu()}>
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
    </StyledNav>
  )
}

const mapStateToProps = (state) => ({
  menu: selectors.app.menu(state),
})

const mapDispatchToProps = {
  toggleMenu: appActions.toggleMenu,
}

export const SideNav = connect(mapStateToProps, mapDispatchToProps)(SideNavComponent)
