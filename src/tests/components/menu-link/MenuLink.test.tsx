import { fireEvent, render, screen } from '@testing-library/react'

import MenuLink, { Item } from '@components/menu-link/MenuLink'

describe('MenuLink component', () => {
  let item: Item

  beforeEach(() => {
    item = {
      title: 'Test Title',
      path: '/test-path',
      icon: <div>Test Icon🚀</div>,
    }
  })

  test('should render a div element when clickEvent is provided', () => {
    item.clickEvent = jest.fn(() => 'This page is empty.')
    render(<MenuLink item={item} />)
    const view = screen.getAllByRole('generic')[1]

    expect(view).toHaveClass('gap-default')
  })

  test('should return a message when clickEvent is clicked', () => {
    item.clickEvent = jest.fn(() => 'This page is empty.')
    render(<MenuLink item={item} />)
    const view = screen.getAllByRole('generic')[1]
    fireEvent.click(view)

    expect(item.clickEvent).toHaveBeenCalledWith('This page is empty.')
  })

  test('should render a Link component when clickEvent is not provided in the item prop', () => {
    render(<MenuLink item={item} />)

    expect(screen.getByRole('link')).toBeInTheDocument()
  })
})
