import Footer from './Footer'
import SideBar from './SideBar'

interface LayoutProps {
  children?: React.ReactNode
}

const Layout: React.FunctionComponent = ({ children }: LayoutProps) => {
  return (
    <div className="grid grid-cols-10 ">
      <SideBar />
      <main className="h-screen col-span-8">{children}</main>
      <Footer />
    </div>
  )
}
export default Layout
