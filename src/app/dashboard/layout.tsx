import { ReactNode } from 'react'

import Navbar from 'components/dashboard/navbar/Navbar'
import Sidebar from 'components/dashboard/sidebar/Sidebar'

interface Children {
  children: ReactNode
}

function Layout({ children }: Children) {
  return (
    <div>
      <Sidebar />
      <Navbar />
      {children}
    </div>
  )
}

export default Layout
