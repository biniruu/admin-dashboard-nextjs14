'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'

interface Item {
  title: string
  path: string
  icon: ReactNode
}

interface Props {
  item: Item
}

function MenuLink({ item }: Props) {
  const { path, icon, title } = item
  const pathname = usePathname()

  return (
    <Link
      href={path}
      className={`my-[0.3125rem] flex items-center gap-default rounded-default p-5 hover:bg-[#2e374a] ${
        pathname === path && 'bg-[#2e374a]'
      }`}
    >
      {icon}
      {title}
    </Link>
  )
}

export default MenuLink
