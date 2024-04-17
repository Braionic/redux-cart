
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className='flex flex-col justify-center relative top-14 mb-5'>
      <Header /> 
      <Outlet />
      <Footer />
    </div>
  )
}
