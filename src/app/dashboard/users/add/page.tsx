'use client'

import styles from './addUser.module.css'

function AddUserPage() {
  // TODO: convert into fetching data when a fetching logic is built
  const addUser = () => {}

  return (
    <div className="mt-5 rounded-default bg-bg-soft p-5">
      <form action={addUser} className={`${styles.form} flex flex-wrap justify-between`}>
        <input type="text" placeholder="username" name="username" required />
        <input type="email" placeholder="email" name="email" required />
        <input type="password" placeholder="password" name="password" required />
        <input type="phone" placeholder="phone" name="phone" />
        <select name="is-admin" id="is-admin">
          <option value="false">is admin?</option>
          <option value="true">yes</option>
          <option value="false">no</option>
        </select>
        <select name="is-active" id="is-active">
          <option value="true">is active?</option>
          <option value="true">yes</option>
          <option value="false">no</option>
        </select>
        <textarea name="address" id="address" rows={16} placeholder="Address"></textarea>
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default AddUserPage
