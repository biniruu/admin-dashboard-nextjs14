'use client'

import styles from './pagination.module.css'

import useNavFunc from 'hooks/useNavFunc'

interface Props {
  total: number
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Pagination({ total }: Props) {
  const { searchParams, replace, pathname } = useNavFunc()

  const currentPage = searchParams?.get('page')
  const pageNumber = Number(currentPage) || 1
  const params = new URLSearchParams(searchParams)
  const ITEM_PER_PAGE = 2

  const hasPrev = ITEM_PER_PAGE * (pageNumber - 1) > 0
  const hasNext = ITEM_PER_PAGE * (pageNumber - 1) + ITEM_PER_PAGE < total

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
