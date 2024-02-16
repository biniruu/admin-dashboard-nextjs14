import { type Error, type Model } from 'mongoose'

import { connectToDB } from './connectionsToDB'

import { Product } from 'model/productScheme'
import { User } from 'model/userScheme'
import { type Product as Products, type User as Users } from 'types'

const fetchUser = async (id: string) => {
  try {
    await connectToDB()

    const user = (await User.findById(id)) as Users

    return user
  } catch (error) {
    const err = error as Error
    console.error(err.message)
  }
}

const fetchProduct = async (id: string) => {
  try {
    await connectToDB()

    const product = (await Product.findById(id)) as Products

    return product
  } catch (error) {
    const err = error as Error
    console.error(err.message)
  }
}

// fetching documents from DB
const fetchData = async (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  dataType: Model<any, {}, {}, {}, any, any>,
  field: string,
  pageNumber: number,
  regex: RegExp,
) => {
  const ITEM_PER_PAGE = 2
  const data = (await dataType
    .find({ [field]: { $regex: regex } })
    .lean()
    .limit(ITEM_PER_PAGE)
    .skip(ITEM_PER_PAGE * (pageNumber - 1))) as Users[] | Products[]

  return data
}

// converting type of '_id' in fetched data from mongoose.ObjectId to string
const convertIdTypeToString = (data: Users[] | Products[]) => {
  const newData = data.map(item => {
    // eslint-disable-next-line no-underscore-dangle
    return { ...item, _id: item._id?.toString() }
  })

  return newData
}

const fetchProducts = async (searchKeywords: string, pageNumber: number) => {
  const regex = new RegExp(searchKeywords, 'i')

  try {
    await connectToDB()

    const data = (await fetchData(Product, 'title', pageNumber, regex)) as Products[]
    const products = convertIdTypeToString(data)
    const totalProducts = await Product.find({ title: { $regex: regex } }).countDocuments()

    return { products, totalProducts }
  } catch (error) {
    const err = error as Error
    console.error(err.message)
  }
}

const fetchUsers = async (searchKeywords: string, pageNumber: number) => {
  const regex = new RegExp(searchKeywords, 'i')

  try {
    await connectToDB()

    const data = (await fetchData(User, 'username', pageNumber, regex)) as Users[]
    const users = convertIdTypeToString(data)
    const totalUsers = await User.find({ username: { $regex: regex } }).countDocuments()

    return { users, totalUsers }
  } catch (error) {
    const err = error as Error
    console.error(err.message)
  }
}

export { fetchProduct, fetchProducts, fetchUser, fetchUsers }
