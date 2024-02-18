'use server'

import { type Error, type Model } from 'mongoose'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { connectToDB } from './connectionsToDB'
import getHashedPassword from './passwordSecurity'

import { Product } from 'model/productScheme'
import { User } from 'model/userScheme'
import { type Product as Products, type User as Users } from 'types'

const userPath = '/dashboard/users'
const productPath = '/dashboard/products'

const logErrorToConsole = (error: Error) => {
  console.error(error.message)
}

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
    logErrorToConsole(error as Error)
  }

  revalidatePath(userPath)
  redirect(userPath)
}

const updateUser = async (formData: FormData) => {
  try {
    await connectToDB()

    const fields = Object.fromEntries(formData) as unknown as Users

    const { id } = fields
    // 'id' must be deleted. There are no 'id' fields in DB.
    delete fields['id' as keyof typeof fields]
    Object.keys(fields).forEach(key => {
      const hasValue = fields[key as keyof typeof fields] !== '' || undefined
      if (!hasValue) {
        delete fields[key as keyof typeof fields]
      }
    })

    await User.findByIdAndUpdate(id, fields)
  } catch (error) {
    logErrorToConsole(error as Error)
  }

  revalidatePath(userPath)
  redirect(userPath)
}

const updateProduct = async (formData: FormData) => {
  try {
    await connectToDB()

    const fields = Object.fromEntries(formData) as unknown as Products

    const { id } = fields
    // 'id' must be deleted. There are no 'id' fields in DB.
    delete fields['id' as keyof typeof fields]
    Object.keys(fields).forEach(key => {
      const hasValue = fields[key as keyof typeof fields] !== '' || undefined
      if (!hasValue) {
        delete fields[key as keyof typeof fields]
      }
    })

    await Product.findByIdAndUpdate(id, fields)
  } catch (error) {
    logErrorToConsole(error as Error)
  }

  revalidatePath(productPath)
  redirect(productPath)
}

const addProduct = async (formData: FormData) => {
  const { title, desc, price, stock, color, size } = Object.fromEntries(formData) as unknown as Products

  try {
    await connectToDB()

    await Product.create<Products>({
      title,
      desc,
      price,
      stock,
      color,
      size,
    })
  } catch (error) {
    logErrorToConsole(error as Error)
  }

  revalidatePath(productPath)
  redirect(productPath)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
const deleteData = async (formData: FormData, dataType: Model<any, {}, {}, {}, any, any>, path: string) => {
  const { id } = Object.fromEntries(formData)

  try {
    await connectToDB()

    await dataType.findByIdAndDelete(id)
  } catch (error) {
    logErrorToConsole(error as Error)
  }

  revalidatePath(path)
}

const deleteProduct = async (formData: FormData) => {
  await deleteData(formData, Product, productPath)
}

const deleteUser = async (formData: FormData) => {
  await deleteData(formData, User, userPath)
}

export { addProduct, addUser, deleteProduct, deleteUser, updateProduct, updateUser }
