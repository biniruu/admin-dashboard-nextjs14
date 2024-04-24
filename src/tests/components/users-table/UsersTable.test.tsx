import renderer from 'react-test-renderer'

import UsersTable from '@components/users-table/UsersTable'
import { User } from 'types'

jest.mock('lib/actions', () => ({
  deleteUser: jest.fn(),
}))

describe('UsersTable component', () => {
  let users: User[]

  beforeEach(() => {
    // It doesn't need to use some properties: password, updatedAt, phone, address. However it is used for just 'User' type
    users = [
      {
        id: 'id1',
        img: '',
        username: 'username1',
        email: 'email1@email.com',
        isAdmin: true,
        isActive: true,
        createdAt: new Date(),
        password: '',
        updatedAt: new Date(),
        phone: '',
        address: '',
      },
      {
        id: 'id2',
        img: '',
        username: 'username2',
        email: 'email2@email.com',
        isAdmin: false,
        isActive: false,
        createdAt: new Date(),
        password: '',
        updatedAt: new Date(),
        phone: '',
        address: '',
      },
    ]
  })

  test('should render the component', () => {
    const result = renderer.create(<UsersTable users={users} />).toJSON()

    expect(result).toMatchSnapshot()
  })
})
