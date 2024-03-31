import { render, screen } from '@testing-library/react'
import { MdSupervisedUserCircle } from 'react-icons/md'
import renderer from 'react-test-renderer'

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

  test('should render Card component correctly', () => {
    const result = renderer.create(<Card data={data} />).toJSON()

    expect(result).toMatchSnapshot()
  })

  test('should have "text-lime" class when the state prop is "positive"', () => {
    render(<Card data={data} />)

    expect(screen.getByTestId('rate').classList.contains('text-lime')).toBe(true)
  })
})
