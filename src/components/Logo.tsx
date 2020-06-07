import React from 'react'
import { Box, BoxProps } from 'rebass'

export interface LogoProps extends BoxProps {
  height: string
}
export const Logo: React.FC<LogoProps> = (props) => (
  <Box as="img" src="icons/logo.svg" alt="Social Slam" {...props} />
)
