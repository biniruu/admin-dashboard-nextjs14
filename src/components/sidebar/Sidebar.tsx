import Image from 'next/image'
import { MdLogout } from 'react-icons/md'

import MenuLink from '../menu-link/MenuLink'

import menuItems from 'data/menuItems'

function Sidebar() {
  return (
    <div className={['sticky', 'top-10'].join(' ')}>
      <div className={['items-center', 'flex', 'gap-5', 'mb-5'].join(' ')}>
        <Image
          src="/noavatar.png"
          width={50}
          height={50}
          className={['object-cover', 'rounded-half'].join(' ')}
          alt=""
        />
        <div className={['flex', 'flex-col'].join(' ')}>
          <span className={['font-medium'].join(' ')}>john joe</span>
          <span className={['text-text-soft', 'text-xs'].join(' ')}>administrator</span>
        </div>
      </div>
      <ul>
        {menuItems.map(cat => {
          const { title, list } = cat

          return (
            <li key={title}>
              <span className={['text-text-soft', 'text-[0.8125rem]', 'font-bold', 'my-[0.625rem]'].join(' ')}>
                {title}
              </span>

              {list.map(item => (
                <MenuLink item={item} key={item.title} />
              ))}
            </li>
          )
        })}
      </ul>
      <button
        className={[
          'items-center',
          'bg-none',
          'border-none',
          'rounded-default',
          'cursor-pointer',
          'flex',
          'gap-default',
          'my-[0.3125rem]',
          'p-5',
          'w-full',
          'hover:bg-[#2e374a]',
          'capitalize',
        ].join(' ')}
      >
        <MdLogout />
        logout
      </button>
    </div>
  )
}

export default Sidebar
