import * as React from 'react'
import {Header} from './Header/Header'
import {SideNav} from './SideNav/SideNav'
import {Helmet} from 'react-helmet'
import {Box, Flex} from 'rebass/styled-components'
import {createGlobalStyle, ThemeProvider} from 'styled-components'

const theme = {
  breakpoints: [0, '576px', '768px', '992px', '1200px', '1400px', '1600px'],
  colors: {
    background: '#ffffff',
    base: '#444444',
    baseInverse: '#ffffff',
    primary: '#5C63FF',
  },
  fonts: {
    body: '"Montserrat", sans-serif',
  },
}

// @ts-ignore
const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body,
  html {
    border: 0;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${({theme}) => theme.colors.background};
    color: ${({theme}) => theme.colors.base};
    font-family: ${({theme}) => theme.fonts.body};
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    min-height: 100vh;
  }

  h1, h2, h3, h4, p, ul, ol, thead, tbody, tr {
    margin: 0;
    padding: 0;
  }

  h1 {
    padding-top: 0.37em;
    font-size: 3.052em;
    margin-bottom: 0.12em;
  }

  h2 {
    padding-top: 0.09em;
    font-size: 2.441em;
    margin-bottom: 0.26em;
  }

  h3 {
    padding-top: 0.44em;
    font-size: 1.953em;
    margin-bottom: 0.4em;
  }

  h4 {
    padding-top: 0.1em;
    font-size: 1.25em;
    margin-bottom: 0.84em;
  }

  p, li, dd, dt, caption, tr thead {
    padding-top: 0.38em;
    font-size: 1em;
    margin-bottom: 1.12em;
  }

  li {
    margin-left: 1.06em;
  }

  table {
    width: 100%;
    border-spacing: 0;
  }

  ::-webkit-scrollbar {
    width: 0px;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
  }
  /* Optional: show position indicator in red */
  ::-webkit-scrollbar-thumb {
      background: #FF0000;
  }
`

interface LayoutProps {
  skipHeader?:boolean;
  skipMenu?:boolean;
  debug?:boolean;
}

export const Layout: React.FC<LayoutProps> = ({children, skipHeader, skipMenu, debug = false}) => {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle/>
      <Flex
        minHeight="100vh"
        flexDirection="column"
        p="3em"
        css={
          debug
            ? `
          background: linear-gradient(rgba(255,0,0,0.15),rgba(255,0,0,0.15) 1px,transparent 1px);
          background-size: 1px 1.5em;
        `
            : ``
        }
      >
        {!skipMenu && <SideNav/>}
        {!skipHeader && <Header/>}
        <Box as="main">{children}</Box>
      </Flex>
    </ThemeProvider>
  )
}
