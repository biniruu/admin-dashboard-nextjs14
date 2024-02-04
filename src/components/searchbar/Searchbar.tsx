'use client'

import { debounce } from 'lodash-es'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { ChangeEvent } from 'react'
import { MdSearch } from 'react-icons/md'

interface Props {
  placeholder: string
}

function Searchbar({ placeholder }: Props) {
  const searchParams = useSearchParams()
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { replace } = useRouter()
  const pathname = usePathname()

  const handleSearch = debounce((e: ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams)

    if (e.target.value) {
      params.set('search', e.target.value)
    } else {
      params.delete('search')
    }

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
