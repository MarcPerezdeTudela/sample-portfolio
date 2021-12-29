import { AiOutlineGithub } from 'react-icons/ai'
import CustomLink from '@/components/CustomLink'
import TextCarousel from '../TextCarousel'

const HeroSection = () => {
  return (
    <section className="flex h-min flex-col pt-6 px-4 pr-6">
      <h1 className="text-secondary font-title text-5xl font-semibold">
        Portfolio Name
      </h1>
      <h2 className="text-primaryText font-title text-4xl font-semibold pt-2">
        Front End Developer
      </h2>
      <h3 className="overflow-hidden text-primaryText font-title text-2xl font-semibold pt-2">
        I build things with: <TextCarousel />
      </h3>
      <p className="text-primaryText leading-relaxed text-sm pt-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mauris
        ligula, pulvinar at enim nec, tempor bibendum nibh.{' '}
        <CustomLink>Vivamus</CustomLink> a commodo sem. Pellentesque ut massa
        vitae magna molestie consectetur. Nam at risus at leo interdum faucibus.
      </p>
      <a
        className="flex whitespace-nowrap mt-12 bg-transparent hover:bg-secondary/[.08] text-secondary px-6 py-4 border border-secondary rounded w-min"
        href="#"
      >
        Watch my projects <AiOutlineGithub className="ml-4" size={24} />
      </a>
    </section>
  )
}

export default HeroSection
