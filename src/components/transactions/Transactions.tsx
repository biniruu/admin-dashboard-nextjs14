import Image from 'next/image'

import transactionItems from './transactionItems'
import styles from './transactions.module.css'

const tableHead: string[] = ['name', 'status', 'date', 'amount']

const bgColor = {
  pending: 'bg-[#f7cb7375]',
  done: 'bg-[#afd6ee75]',
  cancelled: 'bg-[#f7737375]',
}

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
          {/* TODO: Update this when getting data from DB is enabled */}
          {transactionItems.map(item => {
            const { img, name, status, date, price } = item
            const bg = bgColor[status as keyof typeof bgColor]

            return (
              <tr key={`${name}${status}`}>
                <td>
                  <div className="flex items-center">
                    <Image
                      src={img || '/noavatar.png'}
                      alt=""
                      width={40}
                      height={40}
                      className={`${styles['user-image']} mr-4`}
                    />
                    {name}
                  </div>
                </td>
                <td>
                  <span className={`${styles.status} ${bg}`}>{status}</span>
                </td>
                <td>{date}</td>
                <td>${price}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Transactions
