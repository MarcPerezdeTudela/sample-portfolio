import Navbar from './Navbar'
import Footer from './Footer'

interface LayoutProps {
  children?: React.ReactNode
}

const Layout: React.FunctionComponent = ({ children }: LayoutProps) => {
  return (
    <div className="bg-primary">
      <Navbar />
      <main className="px-8 pr-6">{children}</main>
      <Footer />
    </div>
  )
}
export default Layout
