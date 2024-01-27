import Image from 'next/image'
import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md'

import styles from './rightbar.module.css'

function Rightbar() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles['bg-container']}>
          <Image src="/astronaut.png" alt="" fill className={styles.bg} />
        </div>
        <div className={styles.text}>
          <div className={styles.notification}>🔥 available now</div>
          <h3 className={styles.title}>how to use the new version of the admin dashboard?</h3>
          <div className={styles.subtitle}>takes 4 minutes to learn</div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex nemo doloribus temporibus quod excepturi,
            eius magni inventore ratione expedita reprehenderit. Fugit tenetur corrupti laudantium minus. Commodi
            quibusdam corrupti non!
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.text}>
          <div className={styles.notification}>🚀 coming soon</div>
          <h3 className={styles.title}>new server actions are available, partial pre-rendering is coming up!</h3>
          <div className={styles.subtitle}>boost your productivity</div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eius libero perspiciatis recusandae
            possimus.
          </p>
          <button className={styles.button}>
            <MdReadMore />
            learn
          </button>
        </div>
      </div>
    </div>
  )
}

export default Rightbar
