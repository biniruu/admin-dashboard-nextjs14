import Image from 'next/image'

import styles from './transactions.module.css'

function Transactions() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>name</td>
            <td>status</td>
            <td>date</td>
            <td>amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Image src="/noavatar.png" alt="" width={40} height={40} className={styles['user-image']} />
              john doe
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>pending</span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td>
              <Image src="/noavatar.png" alt="" width={40} height={40} className={styles['user-image']} />
              john doe
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>done</span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td>
              <Image src="/noavatar.png" alt="" width={40} height={40} className={styles['user-image']} />
              john doe
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>cancelled</span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Transactions
