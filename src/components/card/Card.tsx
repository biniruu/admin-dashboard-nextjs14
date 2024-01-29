import styles from './card.module.css'

import { type CardData } from 'types'

function Card({ icon, title, number, state, rate, detail }: CardData) {
  return (
    <div className={styles.container}>
      {icon}
      <div className={styles.texts}>
        <span className={styles.title}>{title}</span>
        <span className={styles.number}>{number}</span>
        <span className={styles.detail}>
          <span className={styles[state]}>{rate}%</span>
          {detail}
        </span>
      </div>
    </div>
  )
}

export default Card
