'use client'

import styles from './loginForm.module.css'

function LoginForm() {
  // TODO: convert into useFormState
  const formAction = () => {}
  const state = ''

  return (
    <form
      action={formAction}
      className="flex size-[31.25rem] flex-col items-center justify-center gap-[1.875rem] rounded-default bg-bg-soft p-[3.125rem]"
    >
      <h1>login</h1>
      <input type="text" placeholder="username" name="username" className={styles.input} />
      <input type="password" placeholder="password" name="password" className={styles.input} />
      <button className="w-full cursor-pointer border-none bg-teal-500 p-[1.875rem] text-text">login</button>
      {state && state}
    </form>
  )
}

export default LoginForm
