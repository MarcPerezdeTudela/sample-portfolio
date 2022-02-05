interface Props {
  children?: React.ReactNode
}
const CustomLink = ({ children }: Props) => {
  return (
    <a className="text-secondary font-bold hover:underline" href="#">
      {children}
    </a>
  )
}

export default CustomLink
