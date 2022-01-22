import { SiJavascript } from 'react-icons/si'
import { AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
import Headroom from 'react-headroom'

const Navbar = () => {
  const [shadow, setShadow] = useState(false)
  return (
    <Headroom
      onPin={() => {
        setShadow(true)
      }}
      onUnfix={() => {
        setShadow(false)
      }}
    >
      <nav
        className={`h-min px-8 py-4 bg-primary/[.90] flex justify-between transition-shadow duration-700 items-center ${
          shadow ? 'shadow-xl' : 'shadow-none'
        }`}
      >
        <SiJavascript className="fill-secondary" size={48} />
        <AiOutlineMenu className="fill-secondary" size={32} />
      </nav>
    </Headroom>
  )
}

export default Navbar
