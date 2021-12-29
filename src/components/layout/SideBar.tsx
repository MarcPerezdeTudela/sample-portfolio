import {
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlineIdcard,
  AiOutlineSolution,
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from 'react-icons/ai'
import { SiJavascript } from 'react-icons/si'
import SideBarItem from './SideBarItem'

const SideBar: React.FunctionComponent = () => {
  const logoSize = 42

  return (
    <nav className="row-span-2 col-span-2">
      <div className="flex flex-col h-screen justify-between items-center sticky top-0">
        <div className="pt-8 pb-4 transition transform duration-300 hover:cursor-pointer hover:-translate-y-1 hover:scale-125">
          <SiJavascript className="fill-secondary" size={logoSize} />
        </div>
        <div className="h-1/3 bg-primaryText w-px" />
        <ul className="flex flex-col py-4 gap-4 ">
          <li>
            <SideBarItem icon={AiOutlineHome} />
          </li>
          <li>
            <SideBarItem icon={AiOutlineIdcard} />
          </li>
          <li>
            <SideBarItem icon={AiOutlineSolution} />
          </li>
          <li>
            <SideBarItem icon={AiOutlineMessage} />
          </li>
        </ul>
        <div className="h-1/3 bg-primaryText w-px" />
        <ul className="flex flex-col py-4 gap-4 ">
          <li>
            <SideBarItem icon={AiOutlineFacebook} />
          </li>
          <li>
            <SideBarItem icon={AiOutlineTwitter} />
          </li>
          <li>
            <SideBarItem icon={AiOutlineGithub} />
          </li>
          <li>
            <SideBarItem icon={AiOutlineLinkedin} />
          </li>
        </ul>
        <div className="h-full bg-primaryText w-px" />
      </div>
    </nav>
  )
}
export default SideBar
