import type { Types } from 'mongoose'

import type { FetchUser } from '@utils/helper'
import { convertId, getParams } from '@utils/helper'

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

  test('should convert "id" property to "id" with a string type', () => {
    const user = {
      email: 'email@email.com',
      phone: '0123456789',
      address: 'my home',
      password: '1234',
      isAdmin: false,
      isActive: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    const data: FetchUser[] = [
      {
        _id: 'John' as unknown as Types.ObjectId,
        username: 'John',
        ...user,
      },
      {
        _id: 'Smith' as unknown as Types.ObjectId,
        username: 'Smith',
        ...user,
      },
    ]

    const result = convertId(data)
    const expected = [
      {
        id: 'John',
        username: 'John',
        ...user,
      },
      {
        id: 'Smith',
        username: 'Smith',
        ...user,
      },
    ]

    expect(result).toEqual(expected)
  })
})
