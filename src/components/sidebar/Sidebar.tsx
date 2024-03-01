import Image from 'next/image'
import { MdLogout } from 'react-icons/md'

import MenuLink from '../menu-link/MenuLink'

import menuItems from './menuItems'

import { signOut } from 'auth'

async function Sidebar() {

  const handleSignOut = async () => {
    'use server'

    await signOut()
  }

  return (
    <div className="sticky top-10">
      <div className="mb-5 flex items-center gap-5">
        <Image src="/noavatar.png" width={50} height={50} className="rounded-half object-cover" alt="" />
        <div className="flex flex-col">
          <span className="font-medium">john joe</span>
          <span className="text-xs text-text-soft">administrator</span>
        </div>
      </div>
      <ul>
        {menuItems.map(cat => {
          const { title, list } = cat

          return (
            <li key={title}>
              <span className="my-[0.625rem] text-[0.8125rem] font-bold text-text-soft">{title}</span>

              {list.map(item => (
                <MenuLink item={item} key={item.title} />
              ))}
            </li>
          )
        })}
      </ul>
      <form action={handleSignOut}>
      <button className="my-[0.3125rem] flex w-full cursor-pointer items-center gap-default rounded-default border-none bg-none p-5 capitalize hover:bg-[#2e374a]">
        <MdLogout />
        logout
      </button>
      </form>
      <div className="flex w-full items-center"></div>
    </div>
  )
}

export default Sidebar
