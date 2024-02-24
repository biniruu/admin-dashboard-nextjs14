'use client'

import styles from './pagination.module.css'

import useNavFunc from 'app/hooks/useNavFunc'

interface Props {
  total: number
  itemPerPage: number
  pageNumber: number
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Pagination({ total, itemPerPage, pageNumber }: Props) {
  const { searchParams, replace, pathname } = useNavFunc()

  const params = new URLSearchParams(searchParams)
  const hasPrev = itemPerPage * (pageNumber - 1) > 0
  const hasNext = itemPerPage * (pageNumber - 1) + itemPerPage < total

  const handleChangePage = (type: 'prev' | 'next') => {
    const page = type === 'prev' ? pageNumber - 1 : pageNumber + 1
    params.set('page', page.toString())
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="flex justify-between p-[0.625rem]">
      <button
        className={styles.button}
        disabled={!hasPrev}
        aria-disabled={!hasPrev}
        onClick={() => handleChangePage('prev')}
      >
        previous
      </button>
      <button
        className={styles.button}
        disabled={!hasNext}
        aria-disabled={!hasPrev}
        onClick={() => handleChangePage('next')}
      >
        next
      </button>
    </div>
  )
}

export default Pagination
