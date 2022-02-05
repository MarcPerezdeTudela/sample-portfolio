import Navbar from './Navbar'
import Footer from './Footer'

interface Props {
  children?: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="bg-primary">
      <Navbar />
      <main className="px-8 pb-16 pr-6">{children}</main>
      <Footer />
    </div>
  )
}
export default Layout
