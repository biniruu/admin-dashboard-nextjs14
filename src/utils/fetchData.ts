import { type Error, type Model, type Types } from 'mongoose'

import { connectToDB } from './connectionsToDB'

import { Product } from 'model/productScheme'
import { User } from 'model/userScheme'
import { type Product as Products, type User as Users } from 'types'

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

type FetchData<T> = Omit<T, 'id'> & { _id: Types.ObjectId }
type FetchUser = FetchData<Users>
type FetchProduct = FetchData<Products>

// remove an '_id' property then add an 'id' one that has a string type
const convertId = (data: FetchUser[] | FetchProduct[]) => {
  const newData = data.map(item => {
    const id = item['_id']?.toString()
    delete item['_id' as keyof typeof item]
    const newObj = { ...item, id } as Users | Products

    return newObj
  })

  return newData
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
    .skip(ITEM_PER_PAGE * (pageNumber - 1))) as FetchUser[] | FetchProduct[]

  // need an 'id' property instead of an '_id'
  const newData = convertId(data)

  return newData
}

const fetchProducts = async (searchKeywords: string, pageNumber: number) => {
  const regex = new RegExp(searchKeywords, 'i')

  try {
    await connectToDB()

    const products = (await fetchData(Product, 'title', pageNumber, regex)) as Products[]
    const totalProducts = await Product.find({ title: { $regex: regex } }).countDocuments()

    return { products, totalProducts }
  } catch (error) {
    logErrorToConsole(error as Error)
  }
}

const fetchUsers = async (searchKeywords: string, pageNumber: number) => {
  const regex = new RegExp(searchKeywords, 'i')

  try {
    await connectToDB()

    const users = (await fetchData(User, 'username', pageNumber, regex)) as Users[]
    const totalUsers = await User.find({ username: { $regex: regex } }).countDocuments()

    return { users, totalUsers }
  } catch (error) {
    logErrorToConsole(error as Error)
  }
}

export { fetchProduct, fetchProducts, fetchUser, fetchUsers }
