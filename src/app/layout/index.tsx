import '@/styles/App.css'
import { Outlet } from "react-router"

function Layout({children}: {children?: React.ReactNode}) {
  return (
    <>
      <Outlet />
      {children}
    </>
  )
}

export default Layout
