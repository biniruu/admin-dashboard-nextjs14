/* eslint-disable new-cap */
import { compare } from 'bcryptjs'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

import { authConfig } from './auth.config'
import { User } from './models/userScheme'
import { connectToDB } from './utils/connectionsToDB'

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

      return null
    }

    const isCorrectPassword = await compare(password as string, user.password)
    if (!isCorrectPassword) {
      console.error('The password is incorrect. Please check your password.')

      return null
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
      // FIXME: correct a type error
      async authorize(credentials) {
        const user = await login(credentials)
        if (user) {
          return user
        }

        return null
      },
    }),
  ],
})

export { auth, signIn, signOut }
