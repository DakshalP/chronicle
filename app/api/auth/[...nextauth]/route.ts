import prisma from '@/prisma/client'
import { compare } from 'bcrypt'
import NextAuth, { type NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
  pages: {
    'signIn': '/auth/signin',
    'error': '/auth/error',
  },
  session: {
    strategy: 'jwt'
  },
  providers: [
    CredentialsProvider({
      name: 'Sign in',
      id: 'credentials-login',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'hello@example.com'
        },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {

        if(!credentials?.email || !credentials?.password) return null

        const user = await prisma.user.findUnique({
            where: {
                email: credentials.email
            }
        })

        if(!user) return null

        const isPasswordValid = await compare(credentials.password, user.password)

        if(!isPasswordValid) return null


        return {
            id: user.id + '',
            email: user.email,
            name: user.name
            //randomKey: 'can add some more information to the session token'
        }

      }
    })
  ],
  callbacks: {
    session: ({session, token}) => {
      console.log('Session Callback', { session, token })
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id
          //randomKey: token.randomKey
        }
      }
    },
    jwt: ({token, user}) => {
      console.log('JWT Callback', { token, user })
      if(user) {
        return {
          ...token,
          id: user.id
          //randomKey: u.randomkey
        }
      }
      return token
    }
  }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }