'use client'

import dayjs from 'dayjs'
import Image from 'next/image'
import Link from 'next/link'

import styles from './usersTable.module.css'

import { deleteUser } from 'lib/actions'
import type { User } from 'types'

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
          const { id, img, username, email, isAdmin, isActive, createdAt } = user
          const date = createdAt && dayjs(createdAt).format('YYYY/MM/DD')

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
              <td className="normal-case">{email}</td>
              <td>{date || ''}</td>
              <td>{isAdmin ? 'admin' : 'user'}</td>
              <td>{isActive ? 'active' : 'passive'}</td>
              <td>
                <div className="flex gap-default">
                  <Link href={`/dashboard/users/${id}`}>
                    <button className={`${styles.button} bg-[teal]`}>view</button>
                  </Link>
                  <form action={deleteUser}>
                    <input type="hidden" name="id" value={id} />
                    <button className={`${styles.button} bg-[crimson]`}>delete</button>
                  </form>
                </div>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default UsersTable
