'use client'

import { usePathname } from 'next/navigation'
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from 'react-icons/md'

import tempAlert from 'utils/tempAlert'

function Navbar() {
  const pathname = usePathname()

  return (
    <div className="flex items-center justify-between rounded-default bg-bg-soft p-5">
      <div className="font-bold text-text-soft">{pathname.split('/').pop()}</div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-1 rounded-default bg-[#2e374a] p-[0.625rem]">
          <MdSearch />
          {/* TODO: Make sure it can be working. */}
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search... (not yet working)"
            className="border-none bg-transparent text-text"
          />
        </div>
        <div className="flex gap-5">
          <MdOutlineChat size={20} onClick={() => tempAlert('Nothing to do.')} />
          <MdNotifications size={20} onClick={() => tempAlert('Nothing to do.')} />
          <MdPublic size={20} onClick={() => tempAlert('Nothing to do.')} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
