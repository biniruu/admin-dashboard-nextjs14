import type { User } from 'types'

const getUserInputFormData = (user: User) => {
  const { username, phone, isAdmin, isActive, email, password } = user

  const inputFormData = [
    {
      type: 'text',
      label: 'username',
      value: username,
      placeholder: 'username',
    },
    {
      type: 'email',
      label: 'email',
      value: email,
      placeholder: 'email',
    },
    {
      type: 'password',
      label: 'password',
      value: password,
      placeholder: 'password',
    },
    {
      type: 'text',
      label: 'phone',
      value: phone,
      placeholder: 'phone number',
    },
  ]

  const selectFormData = [
    {
      label: 'is admin?',
      name: 'is-admin',
      selected: isAdmin,
    },
    {
      label: 'is active?',
      name: 'is-active',
      selected: isActive,
    },
  ]

  return { inputFormData, selectFormData }
}

export default getUserInputFormData
