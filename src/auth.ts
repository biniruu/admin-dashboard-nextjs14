/* eslint-disable new-cap */
import { compare } from 'bcryptjs'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

import { authConfig } from './auth.config'
import { connectToDB } from './lib/connectionsToDB'
import { User } from './models/userScheme'

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
    const isCorrectPassword = await compare(password as string, user.password)

    return user && isCorrectPassword ? user : null
  } catch (error) {
    console.error(error)
  }
}

const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  callbacks: {
    // eslint-disable-next-line @typescript-eslint/require-await
    async jwt({ token, account }) {
      if (account) {
        token.username = account.username
        token.img = account.img
      }

      return token
    },
    // eslint-disable-next-line @typescript-eslint/require-await
    async session({ session, token }) {
      if (token) {
        session.user.username = token.username as string
        session.user.img = token.img as string
      }

      return session
    },
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const user = await login(credentials)
        if (user) {
          const { username, email, img } = user

          return { username, email, img }
        }

        return null
      },
    }),
  ],
})

export { auth, signIn, signOut }
