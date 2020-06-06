import React from 'react'

export type LogoProps={
  height:string
}
export const Logo: React.FC<LogoProps> = (props) => (
  <div className="logo grid__column grid__column--2">
    <img
      src="icons/logo.svg"
      className="Home-logo"
      alt="logo"
      style={{ width: '90px' }}
      {...props}
    />
  </div>
)
