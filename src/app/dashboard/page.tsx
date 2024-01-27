import Card from './card/Card'
import Chart from './chart/Chart'
import styles from './dashboard.module.css'
import Rightbar from './rightbar/Rightbar'
import Transactions from './transactions/Transactions'

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
