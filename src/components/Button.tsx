import * as React from 'react'
import { SxStyleProp } from 'rebass'
import { Button as ButtonC } from 'rebass/styled-components'
import styled, { keyframes } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

interface ButtonProps {
  text?: string | React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  sx?: SxStyleProp
  isLoading?: boolean
  disabled?: boolean
}

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Spinner = styled(FontAwesomeIcon)`
  animation: ${rotate360} 1.5s linear infinite;
`

const StyledButton = styled(ButtonC)`
  border-radius: 0;
  padding: 0.75rem 1.5rem;
`

export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  sx,
  isLoading,
  disabled,
}) => {
  return (
    <StyledButton
      sx={sx}
      onClick={onClick}
      disabled={disabled}
      variant={disabled ? 'outline' : 'primary'}
      className="cursor-pointer"
    >
      <span>{text}</span>
      {isLoading && (
        <span>
          &nbsp;
          <Spinner icon={faSpinner} />
        </span>
      )}
    </StyledButton>
  )
}
