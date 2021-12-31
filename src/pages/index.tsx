import AboutSection from '@/components/sections/AboutSection'
import HeroSection from '@/components/sections/HeroSection'
import JobsSection from '@/components/sections/JobsSection'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Fade } from 'react-awesome-reveal'

const Home: NextPage = () => {
  return (
    <div className="grid grid-cols-1 gap-y-24 min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <Fade direction="up" triggerOnce={true}>
        <AboutSection />
      </Fade>
      <Fade direction="up" triggerOnce={true}>
        <JobsSection />
      </Fade>
    </div>
  )
}

export default Home
