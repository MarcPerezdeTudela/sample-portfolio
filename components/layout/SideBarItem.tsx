import React from 'react'
import { IconType } from 'react-icons'

interface NavbarItemProps {
  icon: IconType
}

const SideBarItem = ({ icon }: NavbarItemProps) => {
  const iconSize = 28
  return (
    <a>
      {React.createElement(icon, {
        size: iconSize,
        className:
          'fill-primaryText transition transform duration-300 hover:-translate-y-1 hover:fill-secondary hover:cursor-pointer',
      })}
    </a>
  )
}

export default SideBarItem
