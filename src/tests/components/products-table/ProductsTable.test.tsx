import renderer from 'react-test-renderer'

import ProductsTable from '@components/products-table/ProductsTable'
import type { Product } from 'types'

jest.mock('lib/actions', () => ({
  deleteProduct: jest.fn(),
}))

describe('ProductsTable component', () => {
  let products: Product[]

  beforeEach(() => {
    products = [
      {
        id: '1',
        img: '/product1.jpg',
        title: 'Product 1',
        desc: 'Description 1',
        price: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
        stock: 5,
      },
      {
        id: '2',
        img: '/product2.jpg',
        title: 'Product 2',
        desc: 'Description 2',
        price: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
        stock: 10,
      },
    ]
  })

  test('should render the component', () => {
    const result = renderer.create(<ProductsTable products={products} />).toJSON()

    expect(result).toMatchSnapshot()
  })
})
