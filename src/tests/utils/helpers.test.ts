import type { Types } from 'mongoose'

import type { FetchUser } from '@utils/helper'
import { convertId, getFilteredFields, getParams } from '@utils/helper'

describe('helper functions', () => {
  test('should return an object with SearchKeywords and currentPage properties', () => {
    const searchParams = {
      search: 'user',
      page: '2',
    }

    const result = getParams(searchParams)
    const expected = {
      searchKeywords: 'user',
      currentPage: 2,
    }

    expect(result).toEqual(expected)
  })

  const user = {
    username: 'John',
    email: 'email@email.com',
    phone: '0123456789',
    address: '',
    password: '1234',
    isAdmin: false,
    isActive: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  test('should convert "_id" property to "id" with a string type', () => {
    const data: FetchUser[] = [
      {
        _id: 'Smith' as unknown as Types.ObjectId,
        ...user,
      },
    ]

    const result = convertId(data)
    const expected = [
      {
        id: 'Smith',
        ...user,
      },
    ]

    expect(result).toEqual(expected)
  })

  test('should return fields that have its values and "id" field from formData', () => {
    const formData = new FormData()
    formData.append('id', 'my-id')

    for (const key in user) {
      const field = key as keyof typeof user
      const isDate = user[field] instanceof Date
      const value = isDate ? (user[field] as Date).toISOString() : user[field].toString()
      formData.append(key, value)
    }

    const result = getFilteredFields(formData)

    expect(result).toHaveProperty('id', 'my-id')

    const filteredFields = Object.fromEntries(formData)
    // 'id' field is already checked
    delete filteredFields.id
    // the value of 'address' field is undefined (doesn't have a value)
    delete filteredFields.address

    expect(result).toHaveProperty('filteredFields', filteredFields)
  })
})
