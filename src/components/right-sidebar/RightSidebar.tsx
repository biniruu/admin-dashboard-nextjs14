'use client'

import Image from 'next/image'

import styles from './rightSidebar.module.css'
import rightSidebarItems from './rightSidebarItems'

function RightSidebar() {
  return (
    <div className="fixed">
      {rightSidebarItems.map(item => {
        const { notification, title, subtitle, desc, buttonIcon, button, clickEvent } = item

        return (
          <div className={`relative mb-5 rounded-default px-6 py-5 ${styles.item}`} key={item.button}>
            {item.button === 'watch' && (
              <div className="absolute bottom-0 right-0 size-1/2">
                <Image src="/astronaut.png" alt="" fill className="object-contain opacity-20" />
              </div>
            )}
            <div className="flex flex-col gap-6">
              <div className="font-bold">{notification}</div>
              <h3 className={`${styles.title} first-letter-capital`}>{title}</h3>
              <div className="first-letter-capital text-xs font-medium text-text-soft">{subtitle}</div>
              <p className="text-sm text-text-soft">{desc}</p>
              <button
                className="flex w-max cursor-pointer items-center gap-default rounded-[0.3125rem] border-0 bg-[#5d57c9] p-default capitalize text-white"
                onClick={() => clickEvent('Noting to do.')}
              >
                {buttonIcon}
                {button}
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default RightSidebar
