import Image from 'next/image'
import Link from 'next/link'

import styles from './users.module.css'

import Pagination from 'components/pagination/Pagination'
import Searchbar from 'components/searchbar/Searchbar'

const tableHead: string[] = ['name', 'email', 'created at', 'role', 'status', 'action']

function UsersPage() {
  // TODO: remove when fetching data logic is built
  const count = 0

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Searchbar placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <button className={styles['add-button']}>add new</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            {tableHead.map(item => (
              <td key={item}>{item}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image src="/noavatar.png" alt="" width={40} height={40} className={styles['user-image']} />
                john doe
              </div>
            </td>
            <td>john@gmail.com</td>
            <td>13.01.2022</td>
            <td>admin</td>
            <td>active</td>
            <td>
              <Link href="/">
                <button className={`${styles.button} ${styles.view}`}>view</button>
              </Link>
              <button className={`${styles.button} ${styles.delete}`}>delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  )
}

export default UsersPage
