'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'

// TODO: Remove clickEvent when empty page has its own page
interface Item {
  title: string
  path: string
  icon: ReactNode
  clickEvent?: (text: string) => void
}

interface Props {
  item: Item
}

function MenuLink({ item }: Props) {
  const { path, icon, title, clickEvent } = item
  const pathname = usePathname()

  return clickEvent ? (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      className={`my-[0.3125rem] flex items-center gap-default rounded-default p-5 hover:bg-[#2e374a] ${
        pathname === path && 'bg-[#2e374a]'
      }`}
      onClick={() => clickEvent('This page is empty.')}
    >
      {icon}
      {title}
    </div>
  ) : (
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
