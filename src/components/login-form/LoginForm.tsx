'use client'

import styles from './loginForm.module.css'

function LoginForm() {
  // TODO: convert into useFormState
  const formAction = () => {}
  const state = ''

  return (
    <form action={formAction} className={styles.form}>
      <h1>login</h1>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button>login</button>
      {state && state}
    </form>
  )
}

export default LoginForm
