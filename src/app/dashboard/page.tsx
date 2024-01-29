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
          {/* TODO: remove idx from map */}
          {cardData.map((item, idx) => {
            const { icon, title, number, state, rate, detail } = item

            return (
              <Card key={idx} icon={icon} title={title} number={number} state={state} rate={rate} detail={detail} />
            )
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
