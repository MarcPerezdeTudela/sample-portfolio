import Hamburger from 'hamburger-react'
import { useState } from 'react'

const NavbarMenu = () => {
  const [isOpen, setOpen] = useState(false)
  return <Hamburger toggled={isOpen} toggle={setOpen} color="#F05454" />
}

export default NavbarMenu
