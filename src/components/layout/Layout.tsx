import Navbar from './Navbar'
import Footer from './Footer'

interface Props {
  children?: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="bg-primary">
      <Navbar />
      <div className="flex flex-col items-center w-full">
        <main className="px-8 pb-16 pr-6 max-w-2xl ">{children}</main>
      </div>
      <Footer />
    </div>
  )
}
export default Layout
