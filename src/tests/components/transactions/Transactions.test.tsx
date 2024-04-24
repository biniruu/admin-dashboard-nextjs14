import renderer from 'react-test-renderer'

import Transactions from '@components/transactions/Transactions'

describe('Transactions component', () => {
  test('should render the component', () => {
    const result = renderer.create(<Transactions />).toJSON()

    expect(result).toMatchSnapshot()
  })
})
