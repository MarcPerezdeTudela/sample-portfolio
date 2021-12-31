import { SiJavascript } from 'react-icons/si'
import { AiOutlineMenu } from 'react-icons/ai'
import Headroom from 'react-headroom'

const Navbar = () => {
  return (
    <Headroom>
      <nav className="h-min px-6 py-4 bg-primary/75 flex justify-between items-center">
        <SiJavascript className="fill-secondary" size={48} />
        <AiOutlineMenu className="fill-secondary" size={36} />
      </nav>
    </Headroom>
  )
}

export default Navbar
