import { SiJavascript } from 'react-icons/si'
import { useState } from 'react'
import { Transition } from '@headlessui/react'
import { useDisableBodyScroll } from 'src/hooks/useDisableBodyScroll'
import Headroom from 'react-headroom'
import Hamburger from 'hamburger-react'
import NavbarMobileMenu from './NavbarMobileMenu'
import NavbarLinksPanel from './NavbarLinksPanel'

const Navbar = () => {
  const [shadow, setShadow] = useState(false)
  const [open, setOpen] = useState(false)
  useDisableBodyScroll(open)

  const sections = ['Home', 'About Me', 'Jobs', 'Projects', 'Contact Me']
  const links = [
    '',
    'about-section',
    'jobs-section',
    'projects-section',
    'contact-section',
  ]

  return (
    <Headroom
      className="relative"
      onPin={() => {
        setShadow(true)
      }}
      onUnpin={() => {
        setOpen(false)
      }}
      onUnfix={() => {
        setShadow(false)
      }}
    >
      <nav
        className={`h-min px-12 md:px-20 py-8 flex justify-between z-50 transition-all duration-200 items-center ${
          shadow ? 'shadow-xl' : 'shadow-none'
        } ${open ? 'bg-card' : 'bg-primary/[.90]'}`}
      >
        <SiJavascript className="fill-secondary" size={48} />
        <div aria-label="menu" className="md:hidden">
          <Hamburger toggled={open} toggle={setOpen} color="#F05454" />
        </div>
        <div className="hidden w-full justify-end md:flex">
          <NavbarLinksPanel sections={sections} links={links} />
        </div>
      </nav>

      <Transition
        show={open}
        leave="transform transition duration-[200ms]"
        leaveFrom="translate-y-0 opacity-100"
        leaveTo="-translate-y-12 opacity-0"
        enter="transform transition duration-[200ms]"
        enterFrom="-translate-y-12 opacity-0"
        enterTo="translate-y-0 opacity-100"
      >
        <NavbarMobileMenu sections={sections} links={links} setOpen={setOpen} />
      </Transition>
      <Transition
        show={open}
        leave="transition-opacity duration-[200ms]"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        enter="transition-opacity duration-[200ms]"
        enterFrom="opacity-0"
        enterTo="opacity-100"
      >
        <div
          onClick={() => setOpen(false)}
          className="absolute h-screen bg-card/30 backdrop-blur-sm w-full"
        ></div>
      </Transition>
    </Headroom>
  )
}

export default Navbar
