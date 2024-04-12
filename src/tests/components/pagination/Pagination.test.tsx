import { render, screen } from '@testing-library/react'

import Pagination from '@components/pagination/Pagination'

jest.mock('hooks/useNavFunc', () => ({
  __esModule: true,
  default: () => ({
    searchParams: '',
    replace: jest.fn(),
    pathname: '',
  }),
}))

describe('Pagination component', () => {
  let total: number
  let itemPerPage: number
  let currentPage: number

  beforeEach(() => {
    total = 10
    itemPerPage = 5
    currentPage = 1
  })

  test('should disable the "next" button when currentPage is the last page', () => {
    currentPage = 2

    render(<Pagination total={total} itemPerPage={itemPerPage} currentPage={currentPage} />)

    expect(screen.getByText('next')).toBeDisabled()
  })

  test('should disable the "previous" button when currentPage is the first page', () => {
    render(<Pagination total={total} itemPerPage={itemPerPage} currentPage={currentPage} />)

    expect(screen.getByText('previous')).toBeDisabled()
  })
  test.todo('should disable both "next" and "previous" buttons when total is 0')
  test.todo('should replace url when handleChangePage function is clicked')
})
