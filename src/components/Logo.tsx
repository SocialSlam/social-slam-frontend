import React from 'react'
import { Box } from 'rebass'

export type LogoProps={
  height:string
}
export const Logo: React.FC<LogoProps> = (props) => (
    <Box as="img" src="icons/logo.svg" alt="Social Slam" {...props} />
)
