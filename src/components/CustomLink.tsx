interface CustomLinkProps {
  children?: React.ReactNode
}
const CustomLink = ({ children }: CustomLinkProps) => {
  return (
    <a className="text-secondary font-bold hover:underline" href="#">
      {children}
    </a>
  )
}

export default CustomLink
