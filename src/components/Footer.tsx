import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, FlexProps } from "rebass/styled-components";
import styled from "styled-components";
import { GlobalStyleProps } from "../Theme";
import { SideNavProps } from "./SideNav";

export interface FooterProps extends FlexProps, SideNavProps {}

const StyledFooter = styled(Flex)`
align-self: flex-end;
  flex-shrink: 0;
  width: 100%;
`;

const StyledFooterLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }: GlobalStyleProps) => theme.colors.grey};
`;

const StyledSocialLinkIcons = styled(FontAwesomeIcon)`
  font-size: 2rem;
  margin-left: 10px;
`;

export const Footer: React.FC<FooterProps> = ({
  showMenu,
  toggleMenu,
  ...props
}) => (
  <StyledFooter as="footer" px={4}>
    <Box>
      <a
        href="https://www.facebook.com/SocialSlam.official/"
        target="_blank"
        rel="noreferrer"
      >
        <StyledSocialLinkIcons icon={faFacebookSquare} />
      </a>
      <a
        href="https://www.instagram.com/socialslam_official/"
        target="_blank"
        rel="noreferrer"
      >
        <StyledSocialLinkIcons icon={faInstagram} />
      </a>
    </Box>
    <Box mx="auto" />
    <Box>
      <StyledFooterLink to="/help">Help</StyledFooterLink>
      <StyledFooterLink to="/privacy">Privacy</StyledFooterLink>
      <StyledFooterLink to="/terms">Terms</StyledFooterLink>
    </Box>
  </StyledFooter>
);
