import Link from 'next/link'

import Pagination from 'components/pagination/Pagination'
import Searchbar from 'components/searchbar/Searchbar'
import UsersTable from 'components/users-table/UsersTable'
import { fetchUsers } from 'lib/fetchData'
import type { User } from 'types'
import { getParams } from 'utils/helper'

interface Props {
  searchParams: { [key: string]: string | undefined }
}

interface FetchUsers {
  users: User[]
  totalUsers: number
}

async function UsersPage({ searchParams }: Props) {
  // TODO: make sure the 'page' parameter is visible as soon as the page opens
  const { searchKeywords, currentPage } = getParams(searchParams)
  const ITEM_PER_PAGE = 2

  const { users, totalUsers } = (await fetchUsers(searchKeywords, currentPage)) as FetchUsers

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
        <p className="mb-5 mt-14 flex justify-center lowercase">user data not found.</p>
      )}
      <Pagination total={totalUsers} itemPerPage={ITEM_PER_PAGE} currentPage={currentPage} />
    </div>
  )
}

export default UsersPage
