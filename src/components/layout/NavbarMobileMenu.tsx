import Link from 'next/link'
import React, { Dispatch, SetStateAction } from 'react'

interface Props {
  setOpen: Dispatch<SetStateAction<boolean>>
}
const items = ['Home', 'About Me', 'Jobs', 'Projects', 'Contact Me']
const links = [
  '',
  'about-section',
  'jobs-section',
  'projects-section',
  'contact-section',
]

const NavbarMobileMenu = ({ setOpen }: Props) => {
  return (
    <ul className="absolute bg-card w-full pb-8 z-10 ">
      {items.map((item, index) => {
        return (
          <Link key={index} passHref={true} href={`#${links[index]}`}>
            <li
              onClick={() => {
                setOpen(false)
              }}
              className=" transition-colors duration-200 px-4 py-6 text-primaryText text-center font-semibold hover:cursor-pointer hover:text-secondary"
            >
              {item}
            </li>
          </Link>
        )
      })}
    </ul>
  )
}

export default NavbarMobileMenu
