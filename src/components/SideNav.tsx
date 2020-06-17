import * as React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { routes } from '../Router'
import { GlobalStyleProps } from '../Theme'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledNav = styled.nav`
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  color: ${({ theme }: GlobalStyleProps) => theme.colors.baseInverse};
  background-color: ${({ theme }: GlobalStyleProps) => theme.colors.primary};
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;

  .side-nav__list {
    margin-top: 180px;
  }

  &.side-nav__open {
    left: 0;
    width: 400px;
  }

  .list__item {
    margin: 2rem 4rem;
    list-style-type: none;
  }
`

const StyledNavLink = styled(NavLink)`
  color: ${({ theme }: GlobalStyleProps) => theme.colors.baseInverse};
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  &.nav-link__active {
  }
`

const StyledToggleIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 30px;
  right: 25px;
  margin-left: 50px;
  font-size: 2rem;
  font-weight: 100;
`

export type SideNavProps = {
  showMenu?: boolean
  toggleMenu?: (hideShow: boolean) => void
}

export const SideNav: React.FC<SideNavProps> = ({ showMenu, toggleMenu }) => {
  const ref = React.createRef<HTMLElement>()

  React.useEffect(() => {
    // @ts-ignore
    ref.current.classList.toggle('side-nav__open', showMenu)
  }, [showMenu])

  // @ts-ignore
  return (
    <StyledNav ref={ref}>
      {showMenu && (
        <>
          <StyledToggleIcon
            icon={faChevronLeft}
            onClick={() => toggleMenu(!showMenu)}
          />
          <ul className="side-nav__list list list--unstyled">
            {routes.length > 0 &&
              routes.map(({ path, name }) => (
                <li key={path} className="list__item">
                  <StyledNavLink
                    exact
                    to={path}
                    className="nav-link type-bold"
                    activeClassName="nav-link__active"
                  >
                    {name}
                  </StyledNavLink>
                </li>
              ))}
          </ul>
        </>
      )}
    </StyledNav>
  )
}
