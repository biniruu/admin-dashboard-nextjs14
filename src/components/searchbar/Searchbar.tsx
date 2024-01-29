'use client'

import { MdSearch } from 'react-icons/md'

interface Props {
  placeholder: string
}

function Searchbar({ placeholder }: Props) {
  const handleSearch = () => {}

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
