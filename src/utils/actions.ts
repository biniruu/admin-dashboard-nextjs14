'use server'

import { type Error } from 'mongoose'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { connectToDB } from './connectionsToDB'
import getHashedPassword from './passwordSecurity'

import { User } from 'model/userScheme'
import { type User as Users } from 'types'

const addUser = async (formData: FormData) => {
  const { username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(
    formData,
  ) as unknown as Users

  try {
    await connectToDB()

    const hashedPassword = await getHashedPassword(password)

    await User.create<Users>({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    })
  } catch (error) {
    const err = error as Error
    console.error(err.message)
  }

  revalidatePath('/dashboard/users')
  redirect('/dashboard/users')
}

export { addUser }
