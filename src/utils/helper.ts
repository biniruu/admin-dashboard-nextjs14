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

// eslint-disable-next-line no-underscore-dangle
const _keysWithValue = (fields: User | Product) => {
  const newFields = { ...fields }
  // An 'id' field must be deleted since there is no 'id' field in DB
  delete newFields['id' as keyof typeof newFields]
  Object.keys(newFields).forEach(field => {
    const hasValue = newFields[field as keyof typeof newFields] !== '' || undefined
    if (!hasValue) {
      delete newFields[field as keyof typeof newFields]
    }
  })

  return newFields
}

const getFilteredFields = (formData: FormData) => {
  const fields = Object.fromEntries(formData) as unknown as User | Product
  const { id } = fields
  // An 'id' field is removed from filteredFields
  const filteredFields = _keysWithValue(fields)

  return { id, filteredFields }
}

export { convertId, getFilteredFields, getParams }
