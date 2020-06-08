import * as React from 'react'
import { Header } from './Header'
import { SideNav } from './SideNav'
import { Helmet } from 'react-helmet'
import { Box, Flex } from 'rebass/styled-components'
import { ThemeProvider } from 'styled-components'
import { defaultTheme, GlobalStyle } from '../Theme'

interface LayoutProps {
  skipHeader?: boolean
  skipMenu?: boolean
  debug?: boolean
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  skipHeader,
  skipMenu,
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
        <Box as="main" p="3em">
          {children}
        </Box>
      </Flex>
    </ThemeProvider>
  )
}
