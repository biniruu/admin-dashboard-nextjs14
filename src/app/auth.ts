/* eslint-disable new-cap */
import { compare } from 'bcryptjs'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

import { User } from '../models/userScheme'
import { connectToDB } from '../utils/connectionsToDB'
import { authConfig } from './auth.config'

interface Credentials {
  username: string
  password: string
}

interface LoggedUser {
  password: string
  [key: string]: string
}

const login = async (credentials: Partial<Record<string, unknown> & Credentials>) => {
  const { username, password } = credentials

  try {
    await connectToDB()

    const user = (await User.findOne({ username })) as LoggedUser
    if (!user) {
      console.error('This user is not signed up. Please signing up first.')

      return
    }

    const isCorrectPassword = await compare(password as string, user.password)
    if (!isCorrectPassword) {
      console.error('The password is incorrect. Please check your password.')

      return
    }

    return user
  } catch (error) {
    console.error(error)
  }
}

const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const user = await login(credentials)

        if (!user) {
          // TODO: change the error message
          console.error('Something went wrong.')
        }

        return null
      },
    }),
  ],
})

export { auth, signIn, signOut }
