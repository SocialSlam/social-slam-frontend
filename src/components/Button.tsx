import * as React from "react";
import { SxStyleProp } from "rebass";
import { Button as ButtonC } from "rebass/styled-components";
import styled from "styled-components";

interface ButtonProps {
  text?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  sx?: SxStyleProp;
}

const StyledButton = styled(ButtonC)`
border-radius: 0;
 padding: 0.75rem 1.5rem;
`;

export const Button: React.FC<ButtonProps> = ({ text, onClick, sx }) => {
  return (<StyledButton
    sx={sx}
    onClick={onClick}
  >
    {text}
  </StyledButton>);
};
