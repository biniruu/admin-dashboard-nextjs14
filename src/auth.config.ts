import { type NextAuthConfig } from 'next-auth'

const authConfig = {
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard')

      if (isOnDashboard) {
        return isLoggedIn ? true : false
      }
      if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl))
      }

      return true
    },
  },
  pages: {
    signIn: '/login',
  },
  providers: [],
} satisfies NextAuthConfig

export { authConfig }
