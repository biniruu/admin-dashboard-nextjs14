import { type Error } from 'mongoose'

import { connectToDB } from './connectionsToDB'

import { User } from 'model/userScheme'
import { type User as Users } from 'types'

export const fetchUsers = async () => {
  try {
    await connectToDB()
    const users: Users[] = await User.find()
    return users
  } catch (error) {
    const err = error as Error
    console.error(err.message)
  }
}
