import * as React from 'react'
import { Helmet } from 'react-helmet'
import { Box, Flex } from 'rebass/styled-components'
import styled, { ThemeProvider } from 'styled-components'
import { defaultTheme, GlobalStyle } from '../Theme'
import { Footer } from './Footer'
import { Header } from './Header'
import { SideNav } from './SideNav'

interface LayoutProps {
  skipHeader?: boolean
  skipMenu?: boolean
  skipFooter?: boolean
  debug?: boolean
}

const StyledMainContainer = styled(Box)``

export const Layout: React.FC<LayoutProps> = ({
  children,
  skipHeader,
  skipMenu,
  skipFooter,
  debug = false,
}) => {
  const [showSidebar, setShowSidebar] = React.useState(false)

  return (
    <ThemeProvider theme={defaultTheme}>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <Flex
        minHeight="100vh"
        flexDirection="column"
        css={
          debug
            ? `
          background: linear-gradient(rgba(255,0,0,0.15),rgba(255,0,0,0.15) 1px,transparent 1px);
          background-size: 1px 1.5em;
        `
            : ``
        }
      >
        {!skipMenu && (
          <SideNav showMenu={showSidebar} toggleMenu={setShowSidebar} />
        )}
        {!skipHeader && (
          <Header showMenu={showSidebar} toggleMenu={setShowSidebar} px="3em" />
        )}
        <StyledMainContainer as="main">
          {children}
          {!skipFooter && <Footer />}
        </StyledMainContainer>
      </Flex>
    </ThemeProvider>
  )
}
