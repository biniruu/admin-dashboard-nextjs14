'use client'

import styles from './pagination.module.css'

import useNavFunc from 'hooks/useNavFunc'

interface Props {
  total: number
  itemPerPage: number
  currentPage: number
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Pagination({ total, itemPerPage, currentPage }: Props) {
  const { searchParams, replace, pathname } = useNavFunc()

  const params = new URLSearchParams(searchParams)
  const hasPrev = itemPerPage * (currentPage - 1) > 0
  const hasNext = itemPerPage * (currentPage - 1) + itemPerPage < total

  const handleChangePage = (type: 'prev' | 'next') => {
    const page = type === 'prev' ? currentPage - 1 : currentPage + 1
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
