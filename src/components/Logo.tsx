import React from "react";
import { Box, BoxProps } from "rebass";
import iconLogo from "url:../assets/images/logo.svg";

export interface LogoProps extends BoxProps {
  height: string;
}

export const Logo: React.FC<LogoProps> = (props) => (
  <Box as="img" src={iconLogo} alt="Social Slam" {...props} />
);
