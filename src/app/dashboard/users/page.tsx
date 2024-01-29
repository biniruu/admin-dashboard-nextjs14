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
    <div className="mt-5 rounded-default bg-bg-soft p-5">
      <div className="flex items-center justify-between">
        <Searchbar placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <button className="cursor-pointer rounded-[0.3125rem] border-none bg-[#5d57c9] p-default text-text">
            add new
          </button>
        </Link>
      </div>
      <table className={`w-full ${styles.table}`}>
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
              <div className="flex items-center gap-default">
                <Image src="/noavatar.png" alt="" width={40} height={40} className="rounded-half object-cover" />
                john doe
              </div>
            </td>
            <td>john@gmail.com</td>
            <td>13.01.2022</td>
            <td>admin</td>
            <td>active</td>
            <td className="flex gap-default">
              <Link href="/">
                <button className={`${styles.button} bg-[teal]`}>view</button>
              </Link>
              <button className={`${styles.button} bg-[crimson]`}>delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  )
}

export default UsersPage
