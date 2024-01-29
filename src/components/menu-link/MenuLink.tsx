'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { type ReactNode } from 'react'

import styles from './menuLink.module.css'

interface Item {
  title: string
  path: string
  icon: ReactNode
}

interface Props {
  item: Item
}

function MenuLink({ item }: Props) {
  const pathname = usePathname()

  return (
    <Link href={item.path} className={`${styles.container} ${pathname === item.path && styles.active}`}>
      {item.icon}
      {item.title}
    </Link>
  )
}

export default MenuLink
