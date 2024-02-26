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

interface Menu {
  title: string
  path: string
  icon: ReactNode
}

interface MenuItem {
  title: string
  list: Menu[]
}

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
        icon: <MdWork />,
      },
      {
        title: 'reports',
        path: '/dashboard/reports',
        icon: <MdAnalytics />,
      },
      {
        title: 'teams',
        path: '/dashboard/teams',
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
        icon: <MdOutlineSettings />,
      },
      {
        title: 'help',
        path: '/dashboard/help',
        icon: <MdHelpCenter />,
      },
    ],
  },
]

export default menuItems
