import type { ReactNode } from 'react'

export interface CardData {
  icon: ReactNode
  title: string
  number: number
  state: 'positive' | 'negative'
  rate: number
  detail: string
}

export interface Product {
  id: string
  img?: string
  size?: string
  color?: string
  title: string
  desc: string
  price: number
  stock: number
  createdAt: Date
  updatedAt: Date
}

export interface User {
  id: string
  img?: string
  username: string
  email: string
  phone: string
  address: string
  password: string
  isAdmin: boolean
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

// auth.ts
import 'next-auth'

// TODO: declare for this project
declare module 'next-auth' {
  /**
   * The shape of the user object returned in the OAuth providers' `profile` callback,
   * or the second parameter of the `session` callback, when using a database.
   */
  interface User {}
  /**
   * The shape of the account object returned in the OAuth providers' `account` callback,
   * Usually contains information about the provider being used, like OAuth tokens (`access_token`, etc).
   */
  interface Account {}

  /**
   * Returned by `useSession`, `auth`, contains information about the active session.
   */
  interface Session {}
}

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    idToken?: string
  }
}
