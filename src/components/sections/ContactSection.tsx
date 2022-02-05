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
          <SocialMediaIcon link={'https://facebook.com'}>
            <FaFacebook size={iconSize} />
          </SocialMediaIcon>
          <SocialMediaIcon link={'https://twitter.com'}>
            <FaTwitter size={iconSize} />
          </SocialMediaIcon>
          <SocialMediaIcon link={'https://github.com'}>
            <FaGithub size={iconSize} />
          </SocialMediaIcon>
          <SocialMediaIcon link={'https://linkedin.com'}>
            <FaLinkedin size={iconSize} />
          </SocialMediaIcon>
          <SocialMediaIcon link={'https://gmail.com'}>
            <MdEmail size={iconSize} />
          </SocialMediaIcon>
          <SocialMediaIcon link={'https://instagram.com'}>
            <FaInstagram size={iconSize} />
          </SocialMediaIcon>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
