'use server'

import { type Error } from 'mongoose'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { connectToDB } from './connectionsToDB'
import getHashedPassword from './passwordSecurity'

import { Product } from 'model/productScheme'
import { User } from 'model/userScheme'
import { type Product as Products, type User as Users } from 'types'

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
    const err = error as Error
    console.error(err.message)
  }

  revalidatePath('/dashboard/products')
  redirect('/dashboard/products')
}

const deleteProduct = async (formData: FormData) => {
  const { id } = Object.fromEntries(formData)

  try {
    await connectToDB()

    await Product.findByIdAndDelete(id)
  } catch (error) {
    const err = error as Error
    console.error(err.message)
  }

  revalidatePath('/dashboard/products')
}

const deleteUser = async (formData: FormData) => {
  const { id } = Object.fromEntries(formData)

  try {
    await connectToDB()

    await User.findByIdAndDelete(id)
  } catch (error) {
    const err = error as Error
    console.error(err.message)
  }

  revalidatePath('/dashboard/users')
}

export { addProduct, addUser, deleteProduct, deleteUser }
