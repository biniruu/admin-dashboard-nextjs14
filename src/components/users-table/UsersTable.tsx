import Image from 'next/image'
import Link from 'next/link'

import styles from './usersTable.module.css'

import { User } from 'types'

const tableHead: string[] = ['name', 'email', 'created at', 'role', 'status', 'action']

interface Props {
  users: User[]
}

function UsersTable({ users }: Props) {
  return (
    <table className={`w-full ${styles.table}`}>
      <thead>
        <tr>
          {tableHead.map(item => (
            <td key={item}>{item}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {users?.map(user => {
          const { id, img, username, email, isAdmin, isActive } = user

          return (
            <tr key={id}>
              <td>
                <div className="flex items-center gap-default">
                  <Image
                    src={img || '/noavatar.png'}
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-half object-cover"
                  />
                  {username}
                </div>
              </td>
              <td>{email}</td>
              <td>13.01.2022</td>
              <td>{isAdmin ? 'admin' : 'user'}</td>
              <td>{isActive ? 'active' : 'inactive'}</td>
              <td className="flex gap-default">
                <Link href="/">
                  <button className={`${styles.button} bg-[teal]`}>view</button>
                </Link>
                <button className={`${styles.button} bg-[crimson]`}>delete</button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default UsersTable
