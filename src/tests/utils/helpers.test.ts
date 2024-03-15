import { getParams } from '@utils/helper'

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
})
