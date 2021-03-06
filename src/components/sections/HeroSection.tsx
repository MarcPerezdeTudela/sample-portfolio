import { AiOutlineGithub } from 'react-icons/ai'
import CustomLink from '@/components/CustomLink'
import TextCarousel from '../TextCarousel'
import { Fade } from 'react-awesome-reveal'

const HeroSection = () => {
  return (
    <section id="hero-section" className="flex h-mim flex-col pt-8 pb-16">
      <Fade direction="up" cascade={true} triggerOnce={true}>
        <h1 className="text-secondary font-title text-5xl font-semibold">
          John Doe
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
          vitae magna molestie consectetur. Nam at risus at leo interdum
          faucibus.
        </p>
        <a
          className="flex whitespace-nowrap mt-12 bg-transparent border border-solid border-secondary shadow-2xl font-semibold text-secondary px-4 py-4 rounded-lg w-min"
          href="https://github.com/MarcPerezdeTudela/"
        >
          Check my projects <AiOutlineGithub className="ml-4" size={26} />
        </a>
      </Fade>
    </section>
  )
}

export default HeroSection
