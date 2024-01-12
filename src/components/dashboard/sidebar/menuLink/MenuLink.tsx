'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

import styles from './menuLink.module.css'

interface Item {
  item: {
    title: string
    path: string
    icon: ReactNode
  }
}

function MenuLink({ item }: Item) {
  const pathname = usePathname()

  return (
    <Link href={item.path} className={`${styles.container} ${pathname === item.path && styles.active}`}>
      {item.icon}
      {item.title}
    </Link>
  )
}

export default MenuLink
