import { type ReactNode } from 'react'

export interface CardData {
  icon: ReactNode
  title: string
  number: number
  state: 'positive' | 'negative'
  rate: number
  detail: string
}

export interface Product {
  id?: string
  img?: string
  size?: string
  color?: string
  title: string
  desc: string
  price: string
  stock: string
  createdAt?: Date
  updatedAt?: Date
}

export interface User {
  id?: string
  img?: string
  username: string
  email: string
  phone: string
  address: string
  password: string
  isAdmin: boolean
  isActive: boolean
  createdAt?: Date
  updatedAt?: Date
}
