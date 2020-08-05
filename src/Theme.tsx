import { createGlobalStyle } from 'styled-components'

export type GlobalStyleProps = {
  theme: typeof defaultTheme
}

export const defaultTheme = {
  breakpoints: [0, '576px', '768px', '992px', '1200px', '1400px', '1600px'],
  colors: {
    background: '#ffffff',
    base: '#444444',
    primary: '#5C63FF',
    grey: '#c4c4c4',
    black: '#000000',
    error: '#FF606D',
    success: '#00D2B3',
    highlight: 'rgba(255,1,54, 255)',
  },
  fontSize: {
    highlight: '25px',
    menu: '15px',
    title: '13px',
    meta: '11px',
  },
  buttons: {
    primary: {
      color: 'background',
      bg: 'primary',
      borderColor: 'primary',
      borderWidth: '2px',
      borderStyle: 'solid',
    },
    outline: {
      color: 'primary',
      bg: 'background',
      borderColor: 'primary',
      borderWidth: '2px',
      borderStyle: 'solid',
    },
  },
  fonts: {
    body: '"Montserrat", sans-serif',
  },
}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
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
	height: 100%;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.base};
    font-family: ${({ theme }) => theme.fonts.body};
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
	min-height: 100vh;
  }

  #root{
	  display: flex;
	  flex-direction: column;
	  height: 100%;
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
