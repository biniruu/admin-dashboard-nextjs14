import Image from 'next/image'

import styles from './rightbar.module.css'

import rightbarItems from 'data/rightbarItems'

function Rightbar() {
  return (
    <div className={styles.container}>
      {rightbarItems.map(item => {
        const { notification, title, subtitle, desc, buttonIcon, button } = item

        return (
          <div className={styles.item} key={item.button}>
            {item.button === 'watch' && (
              <div className={styles['bg-container']}>
                <Image src="/astronaut.png" alt="" fill className={styles.bg} />
              </div>
            )}
            <div className={styles.text}>
              <div className={styles.notification}>{notification}</div>
              <h3 className={styles.title}>{title}</h3>
              <div className={styles.subtitle}>{subtitle}</div>
              <p className={styles.desc}>{desc}</p>
              <button className={styles.button}>
                {buttonIcon}
                {button}
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Rightbar
