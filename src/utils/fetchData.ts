import { type Error } from 'mongoose'

import { connectToDB } from './connectionsToDB'

import { Product } from 'model/productScheme'
import { User } from 'model/userScheme'
import { type Product as Products, type User as Users } from 'types'

// convert type of '_id' in fetched data from mongoose.ObjectId to string
const convertIdTypeToString = (data: Users[] | Products[]) => {
  const newData = data.map(item => {
    // eslint-disable-next-line no-underscore-dangle
    return { ...item, _id: item._id?.toString() }
  })

  return newData
}

export const fetchUsers = async (searchKeywords: string, pageNumber: number) => {
  const regex = new RegExp(searchKeywords, 'i')

  const ITEM_PER_PAGE = 2

  try {
    await connectToDB()

    // TODO: Create a variable for reusable User.find method and replace User.find with the created variable
    const data = (await User.find({ username: { $regex: regex } })
      .lean()
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (pageNumber - 1))) as Users[]

    const users = convertIdTypeToString(data)
    const totalUsers = await User.find({ username: { $regex: regex } }).countDocuments()

    return { users, totalUsers }
  } catch (error) {
    const err = error as Error
    console.error(err.message)
  }
}

export const fetchProducts = async (searchKeywords: string, pageNumber: number) => {
  const regex = new RegExp(searchKeywords, 'i')

  const ITEM_PER_PAGE = 2

  try {
    await connectToDB()

    // TODO: Create a variable for reusable User.find method and replace User.find with the created variable
    const data = (await Product.find({ title: { $regex: regex } })
      .lean()
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (pageNumber - 1))) as Products[]

    const products = convertIdTypeToString(data)
    const totalProducts = await Product.find({ title: { $regex: regex } }).countDocuments()

    return { products, totalProducts }
  } catch (error) {
    const err = error as Error
    console.error(err.message)
  }
}
