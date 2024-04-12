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
  test('should disable the "next" button when currentPage is the last page', () => {
    const total = 10
    const itemPerPage = 5
    const currentPage = 2

    render(<Pagination total={total} itemPerPage={itemPerPage} currentPage={currentPage} />)

    expect(screen.getByText('next')).toBeDisabled()
  })
  test.todo('should disable the "previous" button when currentPage is the first page')
  test.todo('should disable both "next" and "previous" buttons when total is 0')
  test.todo('should replace url when handleChangePage function is clicked')
})
