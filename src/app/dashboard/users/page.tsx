import Link from 'next/link'

import Pagination from 'components/pagination/Pagination'
import Searchbar from 'components/searchbar/Searchbar'
import UsersTable from 'components/users-table/UsersTable'
import { type User } from 'types'
import { fetchUsers } from 'utils/fetchData'

interface Props {
  searchParams: { [key: string]: string | undefined }
}

async function UsersPage({ searchParams }: Props) {
  // get user data by search keywords
  const searchKeywords = searchParams?.search || ''
  const currentPage = searchParams?.page || '1'
  const pageNumber = Number(currentPage)

  const { users, totalUsers } = (await fetchUsers(searchKeywords, pageNumber)) as { users: User[]; totalUsers: number }

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
      {users?.length ? (
        <UsersTable users={users} />
      ) : (
        <p className="mb-5 mt-14 flex justify-center lowercase ">user data not found.</p>
      )}
      <Pagination totalUsers={totalUsers} />
    </div>
  )
}

export default UsersPage
