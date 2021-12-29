import Footer from './Footer'
import SideBar from './SideBar'

interface LayoutProps {
  children?: React.ReactNode
}

const Layout: React.FunctionComponent = ({ children }: LayoutProps) => {
  return (
    <div className="bg-primary grid grid-cols-12 grid-rows-2 ">
      <SideBar />
      <main className="flex flex-col h-screen col-span-10">{children}</main>
      <Footer />
    </div>
  )
}
export default Layout
