import { MdSupervisedUserCircle } from 'react-icons/md'

import Card from '../../components/card/Card'
import Chart from '../../components/chart/Chart'
import Rightbar from '../../components/rightbar/Rightbar'
import Transactions from '../../components/transactions/Transactions'

import styles from './dashboard.module.css'

import { type CardData } from 'types'

function Dashboard() {
  const cardData: CardData[] = [
    {
      icon: <MdSupervisedUserCircle size={24} />,
      title: 'total users',
      number: 10.273,
      state: 'positive',
      rate: 12,
      detail: 'more than',
    },
    {
      icon: <MdSupervisedUserCircle size={24} />,
      title: 'total users',
      number: 10.273,
      state: 'positive',
      rate: 12,
      detail: 'more than',
    },
    {
      icon: <MdSupervisedUserCircle size={24} />,
      title: 'total users',
      number: 10.273,
      state: 'positive',
      rate: 12,
      detail: 'more than',
    },
  ]

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          {/* TODO: remove idx from map and use an unique data instead */}
          {cardData.map((data, idx) => {
            return <Card key={idx} data={data} />
          })}
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  )
}

export default Dashboard
