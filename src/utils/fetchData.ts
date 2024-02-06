import { type Error } from 'mongoose'

import { connectToDB } from './connectionsToDB'

import { User } from 'model/userScheme'
import { type User as Users } from 'types'

export const fetchUsers = async (searchKeywords: string, pageNumber: number) => {
  const regex = new RegExp(searchKeywords, 'i')

  const ITEM_PER_PAGE = 2

  try {
    await connectToDB()

    // TODO: Create a variable for reusable User.find method and replace User.find with the created variable
    const users = (await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (pageNumber - 1))) as Users[]
    const totalUsers = await User.find({ username: { $regex: regex } }).countDocuments()

    return { users, totalUsers }
  } catch (error) {
    const err = error as Error
    console.error(err.message)
  }
}
