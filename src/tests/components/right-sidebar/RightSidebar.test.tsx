import renderer from 'react-test-renderer'

import RightSidebar from '@components/right-sidebar/RightSidebar'

jest.mock('@components/right-sidebar/rightSidebarItems', () => {
  return [
    {
      notification: '🔥 available now',
      title: 'how to use the new version of the admin dashboard?',
      subtitle: 'takes 4 minutes to learn',
      desc: 'description',
      buttonIcon: <div>button icon</div>,
      button: 'watch',
      clickEvent: jest.fn(),
    },
    {
      notification: '🚀 coming soon',
      title: 'new server actions are available, partial pre-rendering is coming up!',
      subtitle: 'boost your productivity',
      desc: 'description',
      buttonIcon: <div>button icon</div>,
      button: 'learn',
      clickEvent: jest.fn(),
    },
  ]
})

describe('RightSidebar component', () => {
  test('should render the component', () => {
    const result = renderer.create(<RightSidebar />)

    expect(result).toMatchSnapshot()
  })
})
