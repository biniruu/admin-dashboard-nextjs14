import type { ReactNode } from 'react'
import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md'

interface RightSidebarItem {
  notification: string
  title: string
  subtitle: string
  desc: string
  buttonIcon: ReactNode
  button: string
}

const rightSidebarItems: RightSidebarItem[] = [
  {
    notification: '🔥 available now',
    title: 'how to use the new version of the admin dashboard?',
    subtitle: 'takes 4 minutes to learn',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex nemo doloribus temporibus quod excepturi, eius magni inventore ratione expedita reprehenderit. Fugit tenetur corrupti laudantium minus. Commodi quibusdam corrupti non!',
    buttonIcon: <MdPlayCircleFilled />,
    button: 'watch',
  },
  {
    notification: '🚀 coming soon',
    title: 'new server actions are available, partial pre-rendering is coming up!',
    subtitle: 'boost your productivity',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eius libero perspiciatis recusandae possimus.',
    buttonIcon: <MdReadMore />,
    button: 'learn',
  },
]

export default rightSidebarItems
