import {
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoPython,
  IoLogoCss3,
} from 'react-icons/io'
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
} from 'react-icons/si'
import CustomLink from '../CustomLink'
import SectionHeader from '../SectionHeader'

const AboutSection = () => {
  return (
    <section className="flex h-min flex-col text-primaryText">
      <SectionHeader title="About Me" />
      <div className="leading-relaxed text-sm">
        <p className="py-2 pt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
          <CustomLink>Mauris</CustomLink> ut felis tortor. Donec elementum vitae
          ipsum a lobortis. Nam et leo vitae metus consequat consectetur.
        </p>
        <p className="py-2">
          Cras lacinia justo erat, vel rhoncus enim euismod et. Mauris fermentum
          rutrum venenatis. <CustomLink>Donec</CustomLink> mollis dui enim, sit
          amet malesuada metus eleifend vel.
        </p>
        <p className="py-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis
          viverra nisi, et fermentum tortor. Nam leo dui, mollis eget faucibus
          sed, tincidunt id libero.
        </p>

        <ul className="grid gap-2 grid-cols-2 grid-rows-4 pt-4">
          <li className="flex items-center">
            <IoLogoJavascript className="fill-secondary mr-2" />
            Javascript
          </li>
          <li className="flex items-center">
            <SiTypescript className="fill-secondary mr-2" />
            Typescript
          </li>
          <li className="flex items-center">
            <IoLogoNodejs className="fill-secondary mr-2" />
            Node
          </li>
          <li className="flex items-center">
            <IoLogoPython className="fill-secondary mr-2" />
            Python
          </li>
          <li className="flex items-center">
            <SiReact className="fill-secondary mr-2" />
            React
          </li>
          <li className="flex items-center">
            <SiNextdotjs className="fill-secondary mr-2" />
            Nextjs
          </li>
          <li className="flex items-center">
            <IoLogoCss3 className="fill-secondary mr-2" />
            CSS
          </li>
          <li className="flex items-center">
            <SiTailwindcss className="fill-secondary mr-2" />
            TailwindCSS
          </li>
        </ul>
      </div>
    </section>
  )
}

export default AboutSection
