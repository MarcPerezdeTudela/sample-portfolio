import SectionHeader from '../SectionHeader'
import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import SocialMediaIcon from '../SocialMediaIcon'

const ContactSection = () => {
  const iconSize = 36
  return (
    <section
      id="contact-section"
      className="flex h-min flex-col text-primaryText"
    >
      <SectionHeader title="Contact Me" />
      <div className="flex flex-col items-center">
        <p className="font-semibold pt-6">You can find me in my social media</p>
        <div className="grid grid-rows-2 grid-cols-3  gap-8 justify-items-center w-full py-8 px-8">
          <SocialMediaIcon mediaName={'Facebook'} link={'https://facebook.com'}>
            <FaFacebook className="fill-secondary" size={iconSize} />
          </SocialMediaIcon>
          <SocialMediaIcon mediaName={'Twitter'} link={'https://twitter.com'}>
            <FaTwitter className="fill-secondary" size={iconSize} />
          </SocialMediaIcon>
          <SocialMediaIcon mediaName={'Github'} link={'https://github.com'}>
            <FaGithub className="fill-secondary" size={iconSize} />
          </SocialMediaIcon>
          <SocialMediaIcon mediaName={'Linkedin'} link={'https://linkedin.com'}>
            <FaLinkedin className="fill-secondary" size={iconSize} />
          </SocialMediaIcon>
          <SocialMediaIcon mediaName={'Gmail'} link={'https://gmail.com'}>
            <MdEmail className="fill-secondary" size={iconSize} />
          </SocialMediaIcon>
          <SocialMediaIcon
            mediaName={'Instagram'}
            link={'https://instagram.com'}
          >
            <FaInstagram className="fill-secondary" size={iconSize} />
          </SocialMediaIcon>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
