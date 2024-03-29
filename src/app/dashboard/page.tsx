import Card from '../../components/card/Card'
import Chart from '../../components/chart/Chart'
import RightSidebar from '../../components/right-sidebar/RightSidebar'
import Transactions from '../../components/transactions/Transactions'

import cardData from './cardData'
import styles from './dashboard.module.css'

function Dashboard() {
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
        <RightSidebar />
      </div>
    </div>
  )
}

export default Dashboard
