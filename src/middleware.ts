import NextAuth from 'next-auth'

import { authConfig } from './auth.config'

// eslint-disable-next-line new-cap
export default NextAuth(authConfig).auth

// TODO: Set ignore main page
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
