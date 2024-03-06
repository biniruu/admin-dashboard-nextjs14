'use client'

import { useFormState } from 'react-dom'

import styles from './loginForm.module.css'

import { authenticate } from 'utils/actions'

function LoginForm() {
  const [state, formAction] = useFormState(authenticate, '')

  return (
    <form
      action={formAction}
      className="flex w-[31.25rem] flex-col items-center justify-center gap-[1.875rem] rounded-default bg-bg-soft p-[3.125rem]"
    >
      <h1 className="hidden">login</h1>
      <input type="text" placeholder="username" name="username" className={styles.input} />
      <input type="password" placeholder="password" name="password" className={styles.input} />
      <button className="w-full cursor-pointer border-none bg-teal-500 p-6 capitalize text-text">login</button>
      {state && <div className="lowercase first-letter:capitalize">{state}</div>}
    </form>
  )
}

export default LoginForm
