import * as React from "react";
import { Helmet } from "react-helmet";
import { Box } from "rebass/styled-components";
import styled, { ThemeProvider } from "styled-components";
import { defaultTheme, GlobalStyle } from "../Theme";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { SideNav } from "./SideNav";

interface LayoutProps {
  skipHeader?: boolean;
  skipMenu?: boolean;
  skipFooter?: boolean;
  debug?: boolean;
}

const StyledMainContainer = styled(Box)`
flex: 1 0 auto
`;

export const Layout: React.FC<LayoutProps> = ({
  children,
  skipHeader,
  skipMenu,
  skipFooter,
  debug = false,
}) => {
  const [showSidebar, setShowSidebar] = React.useState(false);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      {!skipHeader && (
        <Header showMenu={showSidebar} toggleMenu={setShowSidebar} px="3em" />
      )}
      {!skipMenu && (
        <SideNav showMenu={showSidebar} toggleMenu={setShowSidebar} />
      )}
      <StyledMainContainer as="main">
        {children}
      </StyledMainContainer>
      {!skipFooter && <Footer />}
    </ThemeProvider>
  );
};
