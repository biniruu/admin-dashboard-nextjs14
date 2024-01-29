import Image from 'next/image'

import styles from './singleUser.module.css'

import { type User } from 'types/user'

interface Params {
  id: string
}

interface Props {
  params: Params
}

function SingleUserPage({ params }: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id } = params

  // TODO: convert into fetching method
  const user: User = {
    img: '',
    username: '',
    id: '',
    email: '',
    phone: '',
    address: '',
    isAdmin: false,
    isActive: false,
  }

  // TODO: build logic
  const updateUser = () => {}

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={user.img || '/noavatar.png'} alt="" fill />
        </div>
        {user.username}
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" name="id" value={user.id} />
          <label htmlFor="text">Username</label>
          <input type="text" name="username" id="text" placeholder={user.username} />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder={user.email} />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
          <label htmlFor="text">Phone</label>
          <input type="text" name="phone" id="text" placeholder={user.phone} />
          <label htmlFor="address">Address</label>
          <textarea name="address" id="address" placeholder={user.address} />
          <label htmlFor="is-admin">Is Admin?</label>
          <select name="is-admin" id="is-admin">
            <option value="true" selected={user.isAdmin}>
              Yes
            </option>
            <option value="false" selected={!user.isAdmin}>
              No
            </option>
          </select>
          <label htmlFor="is-active">Is Active?</label>
          <select name="is-active" id="is-active">
            <option value="true" selected={user.isActive}>
              yes
            </option>
            <option value="false" selected={!user.isActive}>
              no
            </option>
          </select>
          <button>update</button>
        </form>
      </div>
    </div>
  )
}

export default SingleUserPage
