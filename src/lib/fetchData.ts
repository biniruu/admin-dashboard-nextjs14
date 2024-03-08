import type { Error, Model } from 'mongoose'

import { connectToDB } from './connectionsToDB'

import { Product } from 'models/productScheme'
import { User } from 'models/userScheme'
import type { Product as Products, User as Users } from 'types'
import type { FetchProduct, FetchUser } from 'utils/helper'
import { convertId } from 'utils/helper'

const logErrorToConsole = (error: Error) => {
  console.error(error.message)
}

const fetchUser = async (id: string) => {
  try {
    await connectToDB()

    const user = (await User.findById(id)) as Users

    return user
  } catch (error) {
    logErrorToConsole(error as Error)
  }
}

const fetchProduct = async (id: string) => {
  try {
    await connectToDB()

    const product = (await Product.findById(id)) as Products

    return product
  } catch (error) {
    logErrorToConsole(error as Error)
  }
}

// fetching documents from DB
const fetchData = async (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  dataType: Model<any, {}, {}, {}, any, any>,
  field: string,
  currentPage: number,
  regex: RegExp,
) => {
  const ITEM_PER_PAGE = 2
  const data = (await dataType
    .find({ [field]: { $regex: regex } })
    .lean()
    .limit(ITEM_PER_PAGE)
    .skip(ITEM_PER_PAGE * (currentPage - 1))) as FetchUser[] | FetchProduct[]

  // change and use an 'id' property instead of an '_id'
  const newData = convertId(data)

  return newData
}

const fetchProducts = async (searchKeywords: string, currentPage: number) => {
  const regex = new RegExp(searchKeywords, 'i')

  try {
    await connectToDB()

    const products = (await fetchData(Product, 'title', currentPage, regex)) as Products[]
    const totalProducts = await Product.find({ title: { $regex: regex } }).countDocuments()

    return { products, totalProducts }
  } catch (error) {
    logErrorToConsole(error as Error)
  }
}

const fetchUsers = async (searchKeywords: string, currentPage: number) => {
  const regex = new RegExp(searchKeywords, 'i')

  try {
    await connectToDB()

    const users = (await fetchData(User, 'username', currentPage, regex)) as Users[]
    const totalUsers = await User.find({ username: { $regex: regex } }).countDocuments()

    return { users, totalUsers }
  } catch (error) {
    logErrorToConsole(error as Error)
  }
}

export { fetchProduct, fetchProducts, fetchUser, fetchUsers }
