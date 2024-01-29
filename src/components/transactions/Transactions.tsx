import Image from 'next/image'

import styles from './transactions.module.css'

const tableHead: string[] = ['name', 'status', 'date', 'amount']

function Transactions() {
  return (
    <div className="rounded-default bg-bg-soft p-5">
      <h2 className="mb-5 font-extralight text-text-soft">transactions</h2>
      <table className={`w-full ${styles.table}`}>
        <thead>
          <tr>
            {tableHead.map(item => (
              <td key={item}>{item}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Image src="/noavatar.png" alt="" width={40} height={40} className={styles['user-image']} />
              john doe
            </td>
            <td>
              <span className={`${styles.status} bg-[#f7cb7375]`}>pending</span>
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
              <span className={`${styles.status} bg-[#afd6ee75]`}>done</span>
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
              <span className={`${styles.status} bg-[#f7737375]`}>cancelled</span>
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
