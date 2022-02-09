import React from 'react'
import { SiJavascript } from 'react-icons/si'

interface Props {
  size: number
}

const Logo = ({ size }: Props) => {
  return (
    <a href={'/'}>
      <SiJavascript className="fill-secondary" size={size} />
    </a>
  )
}
export default Logo
