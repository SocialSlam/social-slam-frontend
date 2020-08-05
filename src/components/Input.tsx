import { Input as InputC, Label } from '@rebass/forms/styled-components'
import * as React from 'react'
import { Box, SxStyleProp } from 'rebass'
import styled from 'styled-components'
import { GlobalStyleProps } from '../Theme'

interface InputProps {
  title?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  sx?: SxStyleProp
  isInvalid?: boolean
  invalidMessage?: string
  type?: string
}

const StyledInputContainer = styled(Box)`
  border: 2px solid
    ${({ theme, isInvalid }: GlobalStyleProps & { isInvalid: boolean }) =>
      isInvalid === undefined
        ? theme.colors.grey
        : isInvalid
        ? theme.colors.error
        : theme.colors.success};
  padding: 1rem 2rem;
`

const StyledInput = styled(InputC)`
  border: none;
  outline: none;
  padding: 0;
  border-bottom: 1px solid ${({ theme }: GlobalStyleProps) => theme.colors.grey};
`

const StyledLabel = styled(Label)`
  color: ${({ theme }: GlobalStyleProps) => theme.colors.grey};
`

const StyledInvalidLabel = styled.span`
  color: ${({ theme }: GlobalStyleProps) => theme.colors.error};
  font-size: ${({ theme }: GlobalStyleProps) => theme.fontSize.meta};
`

export const Input: React.FC<InputProps> = ({
  title,
  onChange,
  value,
  sx,
  isInvalid,
  invalidMessage,
  type,
}) => {
  return (
    //@ts-ignore
    <StyledInputContainer sx={sx} isInvalid={isInvalid}>
      <StyledLabel>
        {title}&nbsp;&nbsp;&nbsp;
        {isInvalid && (
          <StyledInvalidLabel>{invalidMessage || 'Invalid'}</StyledInvalidLabel>
        )}
      </StyledLabel>
      <StyledInput onChange={onChange} value={value} type={type} />
    </StyledInputContainer>
  )
}
