import { type ReactNode } from 'react'

import styles from './dashboard.module.css'

import Navbar from 'app/components/navbar/Navbar'
import Sidebar from 'app/components/sidebar/Sidebar'

interface Children {
  children: ReactNode
}

function Layout({ children }: Children) {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
      </div>
    </div>
  )
}

export default Layout
