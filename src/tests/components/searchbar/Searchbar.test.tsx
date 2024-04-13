import { fireEvent, render, screen } from '@testing-library/react'
import type { LoDashStatic } from 'lodash'
import type { ChangeEvent } from 'react'

import Searchbar from '@components/searchbar/Searchbar'

const replace = jest.fn()

jest.mock('hooks/useNavFunc', () => ({
  __esModule: true,
  default: () => ({
    searchParams: '',
    replace,
    pathname: 'test',
  }),
}))

jest.mock('lodash-es', () => {
  const originalModule: LoDashStatic = jest.requireActual('lodash-es')

  return {
    ...originalModule,
    debounce: (fn: ChangeEvent<HTMLInputElement>) => fn,
  }
})

describe('Searchbar component', () => {
  const placeholder = 'Enter search term'

  test('should update input value and URL when user types in search input', () => {
    render(<Searchbar placeholder={placeholder} />)
    const input = screen.getByPlaceholderText(placeholder)
    fireEvent.change(input, { target: { value: 'hello' } })

    expect(replace).toHaveBeenCalledWith('test?page=1&search=hello')
  })
})
