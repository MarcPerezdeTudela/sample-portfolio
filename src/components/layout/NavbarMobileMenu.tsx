import Link from 'next/link'
import React, { Dispatch, SetStateAction } from 'react'

interface Props {
  setOpen: Dispatch<SetStateAction<boolean>>
  sections: string[]
  links: string[]
}

const NavbarMobileMenu = ({ setOpen, sections, links }: Props) => {
  return (
    <ul className="absolute bg-card w-full pb-8 z-10 ">
      {sections.map((section, index) => {
        return (
          <Link key={index} passHref={true} href={`#${links[index]}`}>
            <li
              onClick={() => {
                setOpen(false)
              }}
              className=" transition-colors duration-200 px-4 py-6 text-primaryText text-center font-semibold hover:cursor-pointer hover:text-secondary"
            >
              {section}
            </li>
          </Link>
        )
      })}
    </ul>
  )
}

export default NavbarMobileMenu
