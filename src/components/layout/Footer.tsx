import { DiGithubBadge } from 'react-icons/di'

const Footer = () => {
  return (
    <footer className="h-24 pb-2 flex flex-col justify-center justify-items-center items-center">
      <p className="text-primaryText">Created and designed by </p>
      <div className="flex justify-center justify-items-center items-center">
        <a
          href="#"
          className="text-secondary whitespace-nowrap hover:underline flex justify-center justify-items-center items-center"
        >
          Marc Pérez de Tudela
          <DiGithubBadge className="fill-secondary ml-2" size={28} />
        </a>
      </div>
    </footer>
  )
}

export default Footer
