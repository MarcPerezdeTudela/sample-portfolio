import React, { ReactElement } from 'react'
interface Props {
  children: ReactElement
  link: string
}
const SocialMediaIcon = ({ link, children }: Props) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="transition-all duration-700 hover:translate-y-1 hover:scale-125 bg-secondary shadow-xl font-semibold px-4 py-4 rounded-lg w-min"
    >
      {children}
    </a>
  )
}

export default SocialMediaIcon
