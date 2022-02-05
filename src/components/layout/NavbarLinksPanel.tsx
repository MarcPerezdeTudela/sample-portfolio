import Link from 'next/link'

interface Props {
  sections: string[]
  links: string[]
}
const NavbarLinksPanel = ({ sections, links }: Props) => {
  return (
    <ul className="px-12 justify-around w-full max-w-lg flex">
      {sections.map((section, index) => {
        return (
          <Link key={index} passHref={true} href={`#${links[index]}`}>
            <li className="whitespace-nowrap text-primaryText hover:cursor-pointer font-semibold p-4 hover:text-secondary">
              {section}
            </li>
          </Link>
        )
      })}
    </ul>
  )
}

export default NavbarLinksPanel
