import type { ReactNode } from 'react'
import {
  MdAnalytics,
  MdAttachMoney,
  MdDashboard,
  MdHelpCenter,
  MdOutlineSettings,
  MdPeople,
  MdShoppingBag,
  MdSupervisedUserCircle,
  MdWork,
} from 'react-icons/md'

import tempAlert from 'utils/tempAlert'

interface Menu {
  title: string
  path: string
  icon: ReactNode
  clickEvent?: (text: string) => void
}

interface MenuItem {
  title: string
  list: Menu[]
}

// TODO: Remove clickEvent when all menus are having their own pages
const menuItems: MenuItem[] = [
  {
    title: 'pages',
    list: [
      {
        title: 'dashboard',
        path: '/dashboard',
        icon: <MdDashboard />,
      },
      {
        title: 'users',
        path: '/dashboard/users',
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: 'products',
        path: '/dashboard/products',
        icon: <MdShoppingBag />,
      },
      {
        title: 'transactions',
        path: '/dashboard/transactions',
        clickEvent: tempAlert,
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: 'analytics',
    list: [
      {
        title: 'revenue',
        path: '/dashboard/revenue',
        clickEvent: tempAlert,
        icon: <MdWork />,
      },
      {
        title: 'reports',
        path: '/dashboard/reports',
        clickEvent: tempAlert,
        icon: <MdAnalytics />,
      },
      {
        title: 'teams',
        path: '/dashboard/teams',
        clickEvent: tempAlert,
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: 'user',
    list: [
      {
        title: 'settings',
        path: '/dashboard/settings',
        clickEvent: tempAlert,
        icon: <MdOutlineSettings />,
      },
      {
        title: 'help',
        path: '/dashboard/help',
        clickEvent: tempAlert,
        icon: <MdHelpCenter />,
      },
    ],
  },
]

export default menuItems
