'use server'

import type { Error } from 'mongoose'
import { Model } from 'mongoose'
import type { AuthError } from 'next-auth'
import { revalidatePath } from 'next/cache'
import { isRedirectError } from 'next/dist/client/components/redirect'
import { redirect } from 'next/navigation'

import { connectToDB } from './connectionsToDB'
import getHashedPassword from './passwordSecurity'

import { signIn } from 'auth'
import { Product } from 'models/productScheme'
import { User } from 'models/userScheme'
import type { Product as Products, User as Users } from 'types'

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

const getUpdateFields = (formData: FormData) => {
  const fields = Object.fromEntries(formData) as unknown as Users | Products
  const { id } = fields
  // 'id' must be deleted. There are no 'id' fields in DB.
  delete fields['id' as keyof typeof fields]
  Object.keys(fields).forEach(key => {
    const hasValue = fields[key as keyof typeof fields] !== '' || undefined
    if (!hasValue) {
      delete fields[key as keyof typeof fields]
    }
  })

  return { id, fields }
}

interface Fields<T> {
  id: string
  fields: T
}

const updateUser = async (formData: FormData) => {
  try {
    await connectToDB()

    const { id, fields } = getUpdateFields(formData) as Fields<Users>

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

    const { id, fields } = getUpdateFields(formData) as Fields<Products>

    await Product.findByIdAndUpdate(id, fields)
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const authenticate = async (prevState: string | undefined, formData: FormData) => {
  const { username, password } = Object.fromEntries(formData)

  try {
    await signIn('credentials', { username, password })
  } catch (error) {
    const err = error as AuthError
    // Redirect to dashboard since a NEXT_REDIRECT error always occurs and interrupts the redirection process after login
    if (isRedirectError(error)) {
      redirect('/dashboard')
    }
    // TODO: Make sure to distinguish between errors in a username and those in a password.
    if (err.type === 'CredentialsSignin') {
      return 'Please check your username or password.'
    }
    return 'Something went wrong. Please contact customer support.'
  }
}

export { addProduct, addUser, authenticate, deleteProduct, deleteUser, updateProduct, updateUser }
