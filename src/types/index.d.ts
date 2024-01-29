import { type ReactNode } from 'react'

export interface CardData {
  icon: ReactNode
  title: string
  number: number
  state: string
  rate: number
  detail: string
}

export interface Product {
  id: string
  img: string
  title: string
  desc: string
  price: string
  createdAt: number
  stock: string
}

export interface User {
  img: string
  username: string
  id: string
  email: string
  phone: string
  address: string
  isAdmin: boolean
  isActive: boolean
}
