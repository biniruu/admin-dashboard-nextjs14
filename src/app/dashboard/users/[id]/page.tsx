'use client'

import Image from 'next/image'

import styles from './singleUser.module.css'

import { type User } from 'types'

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
  const user: Omit<User, 'password'> = {
    img: '',
    username: '',
    _id: '',
    email: '',
    phone: '',
    address: '',
    isAdmin: false,
    isActive: false,
  }

  // TODO: convert into useState
  const inputFormData = [
    {
      type: 'text',
      label: 'username',
      placeholder: user.username,
    },
    {
      type: 'email',
      label: 'email',
      placeholder: user.username,
    },
    {
      type: 'password',
      label: 'password',
      placeholder: '',
    },
    {
      type: 'text',
      label: 'phone',
      placeholder: user.phone,
    },
  ]

  // TODO: convert into useState
  const selectFormData = [
    {
      label: 'is admin?',
      name: 'is-admin',
      selected: user.isAdmin,
    },
    {
      label: 'is active?',
      name: 'is-active',
      selected: user.isActive,
    },
  ]

  // TODO: build logic
  const updateUser = () => {}

  return (
    <div className="mt-5 flex gap-[3.125rem]">
      <div className="h-max flex-[1] rounded-default bg-bg-soft p-5 font-bold text-text-soft">
        <div className="relative mb-5 h-[18.75rem] w-full overflow-hidden rounded-default">
          <Image src={user.img || '/noavatar.png'} alt="" fill />
        </div>
        {user.username}
      </div>
      <div className="flex-[3] rounded-default bg-bg-soft p-5">
        <form action={updateUser} className={`${styles.form} flex flex-col`}>
          {/* eslint-disable-next-line no-underscore-dangle */}
          <input type="hidden" name="id" value={user._id} />

          {inputFormData.map(item => {
            const { type, label, placeholder } = item

            return (
              <div key={label}>
                <label htmlFor={label}>{label}</label>
                <input type={type} name={label} id={label} placeholder={placeholder} />
              </div>
            )
          })}

          <div>
            <label htmlFor="address">address</label>
            <textarea name="address" id="address" placeholder={user.address} />
          </div>

          {selectFormData.map(item => {
            const { label, name, selected } = item

            return (
              <div key={name}>
                <label htmlFor={name}>{label}</label>
                <select name={name} id={name}>
                  <option value="true" selected={selected}>
                    yes
                  </option>
                  <option value="false" selected={!selected}>
                    no
                  </option>
                </select>
              </div>
            )
          })}
          <button className="mt-5 w-full cursor-pointer rounded-[0.3125rem] border-none bg-[teal] p-5 text-text">
            update
          </button>
        </form>
      </div>
    </div>
  )
}

export default SingleUserPage
