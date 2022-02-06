import { ReactElement } from 'react'
interface Props {
  children: ReactElement
  link: string
  mediaName: string
}
const SocialMediaIcon = ({ link, children, mediaName }: Props) => {
  return (
    <a
      aria-label={mediaName}
      href={link}
      target="_blank"
      rel="dns-prefetch noopener noreferrer"
      className="transition-all fill-secondary duration-700 hover:translate-y-1 hover:scale-125 bg-transparent border border-solid border-secondary shadow-xl font-semibold px-4 py-4 rounded-lg w-min"
    >
      {children}
    </a>
  )
}

export default SocialMediaIcon
