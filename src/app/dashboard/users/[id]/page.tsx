import Image from 'next/image'

import styles from './singleUser.module.css'
import getUserInputFormData from './userInputFormData'

import type { User } from 'types'
import { updateUser } from 'utils/actions'
import { fetchUser } from 'utils/fetchData'

interface Params {
  id: string
}

interface Props {
  params: Params
}

async function SingleUserPage({ params }: Props) {
  const { id } = params
  const user = (await fetchUser(id)) as User
  const { img, address, username } = user
  const { inputFormData, selectFormData } = getUserInputFormData(user)

  return (
    <div className="mt-5 flex gap-[3.125rem]">
      <div className="h-max flex-[1] rounded-default bg-bg-soft p-5 font-bold text-text-soft">
        <div className="relative mb-5 h-[18.75rem] w-full overflow-hidden rounded-default">
          <Image src={img || '/noavatar.png'} alt="" fill />
        </div>
        {username}
      </div>
      <div className="flex-[3] rounded-default bg-bg-soft p-5">
        <form action={updateUser} className={`${styles.form} flex flex-col`}>
          <input type="hidden" name="id" value={id} />

          {inputFormData.map(item => {
            const { type, label, placeholder, value } = item

            return (
              <div key={label}>
                <label htmlFor={label}>{label}</label>
                <input type={type} name={label} id={label} placeholder={placeholder} defaultValue={value} />
              </div>
            )
          })}

          <div>
            <label htmlFor="address">address</label>
            <textarea name="address" id="address" placeholder={address} />
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
