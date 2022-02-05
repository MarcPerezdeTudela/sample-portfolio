import AboutSection from '@/components/sections/AboutSection'
import ContactSection from '@/components/sections/ContactSection'
import HeroSection from '@/components/sections/HeroSection'
import JobsSection from '@/components/sections/JobsSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Fade } from 'react-awesome-reveal'

const Home: NextPage = () => {
  return (
    <div className="grid grid-cols-1 gap-y-20 min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <Fade direction="up" triggerOnce={true} fraction={0.25}>
        <AboutSection />
      </Fade>
      <Fade direction="up" triggerOnce={true} fraction={0.25}>
        <JobsSection />
      </Fade>
      <Fade direction="up" triggerOnce={true} fraction={0.1}>
        <ProjectsSection />
      </Fade>
      <Fade direction="up" triggerOnce={true} fraction={0.25}>
        <ContactSection />
      </Fade>
    </div>
  )
}

export default Home
