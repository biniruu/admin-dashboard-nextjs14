import { type ReactNode } from 'react'

export interface CardData {
  icon: ReactNode
  title: string
  number: number
  state: string
  rate: number
  detail: string
}
