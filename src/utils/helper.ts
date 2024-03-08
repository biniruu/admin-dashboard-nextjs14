import type { Types } from 'mongoose'

import type { Product, User } from 'types'

interface Props {
  [key: string]: string | undefined
}

const getParams = (searchParams: Props) => {
  const searchKeywords = searchParams?.search || ''
  const currentPage = Number(searchParams?.page || '1')

  return { searchKeywords, currentPage }
}

type FetchData<T> = Omit<T, 'id'> & { _id: Types.ObjectId }
export type FetchUser = FetchData<User>
export type FetchProduct = FetchData<Product>

// remove an '_id' property then add an 'id' one that has a string type
const convertId = (data: FetchUser[] | FetchProduct[]) => {
  // TODO: convert from map to reduce
  const newData = data.map(item => {
    const id = item['_id']?.toString()
    delete item['_id' as keyof typeof item]
    const newItem = { ...item, id } as User | Product

    return newItem
  })

  return newData
}

export { convertId, getParams }
