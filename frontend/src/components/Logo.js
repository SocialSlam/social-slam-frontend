import React from 'react'
import { Box } from 'rebass'

import logo from './logo_black.svg'

export const Logo = ({ ...props }) => (
  <Box as="img" src={logo} alt="Social Slam" {...props} />
)

export default Logo
