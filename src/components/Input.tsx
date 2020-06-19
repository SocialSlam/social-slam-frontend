import { Input as InputC, Label } from "@rebass/forms/styled-components";
import * as React from "react";
import { Box, SxStyleProp } from "rebass";
import styled from "styled-components";
import { GlobalStyleProps } from "../Theme";

interface InputProps {
  title?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  sx?: SxStyleProp;
}

const StyledInputContainer = styled(Box)`
  border: 2px solid ${({ theme }: GlobalStyleProps) => theme.colors.grey};
  padding: 1rem 2rem;
`;

const StyledInput = styled(InputC)`
  border: none;
  outline: none;
  padding: 0;
  border-bottom: 1px solid ${({ theme }: GlobalStyleProps) =>
  theme.colors.grey};
`;

const StyledLabel = styled(Label)`
  color: ${({ theme }: GlobalStyleProps) => theme.colors.grey};
`;

export const Input: React.FC<InputProps> = ({ title, onChange, value, sx }) => {
  return (<StyledInputContainer sx={sx}>
    <StyledLabel>{title}</StyledLabel>
    <StyledInput
      onChange={onChange}
      value={value}
    />
  </StyledInputContainer>);
};
