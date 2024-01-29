'use client'

import styles from './pagination.module.css'

function Pagination() {
  // TODO: build logics
  const hasPrev = ''
  const hasNext = ''

  const handleChangePage = (type: 'prev' | 'next') => {
    // eslint-disable-next-line no-console
    console.log(type)
  }

  return (
    <div className={styles.container}>
      <button className={styles.button} disabled={!hasPrev} onClick={() => handleChangePage('prev')}>
        previous
      </button>
      <button className={styles.button} disabled={!hasNext} onClick={() => handleChangePage('next')}>
        next
      </button>
    </div>
  )
}

export default Pagination
