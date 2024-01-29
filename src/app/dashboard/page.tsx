import Card from '../../components/card/Card'
import Chart from '../../components/chart/Chart'
import Transactions from '../../components/transactions/Transactions'

import styles from './dashboard.module.css'
import Rightbar from './rightbar/Rightbar'

function Dashboard() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
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
