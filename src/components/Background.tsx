import * as React from "react";
import { Text } from "rebass";
import styled from "styled-components";

export interface FooterProps {
  image: any;
  style?: React.CSSProperties;
}

const StyledBackground = styled.div`
pointer-events: none;
position: absolute;
left:0;
height: 80%;
z-index: -1;
`;

export const Background: React.FC<FooterProps> = ({
  image,
  ...props
}) => (
  <StyledBackground>
    <img src={image} {...props} />
    <Text color="white" style={{ margin: "1px 1px 1px 1px" }}>
      Tip local<br />stay social
    </Text>
  </StyledBackground>
);
