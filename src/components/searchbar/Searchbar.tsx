'use client'

import { debounce } from 'lodash-es'
import type { ChangeEvent } from 'react'
import { MdSearch } from 'react-icons/md'

import useNavFunc from 'hooks/useNavFunc'

interface Props {
  placeholder: string
}

function Searchbar({ placeholder }: Props) {
  const { searchParams, replace, pathname } = useNavFunc()

  const handleSearch = debounce((e: ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', '1')
    e.target.value ? params.set('search', e.target.value) : params.delete('search')
    replace(`${pathname}?${params.toString()}`)
  })

  return (
    <div className="flex w-max items-center gap-default rounded-default bg-hover p-default">
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className="border-none bg-transparent text-text outline-none"
        onChange={handleSearch}
      />
    </div>
  )
}

export default Searchbar
