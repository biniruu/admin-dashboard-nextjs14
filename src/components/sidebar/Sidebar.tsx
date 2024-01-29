import Image from 'next/image'
import { MdLogout } from 'react-icons/md'

import MenuLink from '../menu-link/MenuLink'

import styles from './sidebar.module.css'

import menuItems from 'data/menuItems'

function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image src="/noavatar.png" width={50} height={50} className={styles['user-image']} alt="" />
        <div className={styles['user-detail']}>
          <span className={styles.username}>john joe</span>
          <span className={styles['user-title']}>administrator</span>
        </div>
      </div>
      <ul>
        {menuItems.map(cat => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map(item => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <button className={styles.logout}>
        <MdLogout />
        logout
      </button>
    </div>
  )
}

export default Sidebar
