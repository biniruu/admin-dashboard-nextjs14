import styles from './login.module.css'

import LoginForm from 'components/login-form/LoginForm'

function LoginPage() {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  )
}

export default LoginPage
