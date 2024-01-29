'use client'

import { MdSearch } from 'react-icons/md'

import styles from './searchbar.module.css'

interface Props {
  placeholder: string
}

function Searchbar({ placeholder }: Props) {
  const handleSearch = () => {}

  return (
    <div className={styles.container}>
      <MdSearch />
      <input type="text" placeholder={placeholder} className={styles.input} onChange={handleSearch} />
    </div>
  )
}

export default Searchbar
