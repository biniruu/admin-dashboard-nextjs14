import { render, screen } from '@testing-library/react'
import { MdSupervisedUserCircle } from 'react-icons/md'

import Card from '@components/card/Card'
import type { CardData } from 'types'

jest.mock('react-icons/md', () => ({ MdSupervisedUserCircle: () => <div>icon🚀</div> }))

describe('Card component', () => {
  const data: CardData = {
    icon: <MdSupervisedUserCircle />,
    title: 'title',
    number: 1,
    state: 'positive',
    rate: 1,
    detail: 'detail',
  }

  test('should show the text and icon element with "data" prop', () => {
    render(<Card data={data} />)

    expect(screen.getByText('icon🚀')).toBeInTheDocument()
    expect(screen.getByText(data.title)).toBeInTheDocument()
    expect(screen.getByText(data.number)).toBeInTheDocument()
    expect(screen.getByText(/1%/)).toBeInTheDocument()
    expect(screen.getByText(data.detail)).toBeInTheDocument()
  })

  test('should have "text-lime" class when the state prop is "positive"', () => {
    render(<Card data={data} />)

    expect(screen.getByTestId('rate').classList.contains('text-lime')).toBe(true)
  })
})
