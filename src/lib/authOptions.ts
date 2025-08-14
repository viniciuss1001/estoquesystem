import { PrismaAdapter } from "@next-auth/prisma-adapter"
import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "@/lib/prisma"
import { comparePasswords } from "@/lib/auth"
import type { NextAuthOptions } from "next-auth"

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Senha", type: "password" },
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: { email: credentials?.email },
        })

        if (!user) return null

        const valid = await comparePasswords(credentials?.password || "", user.password)
        if (!valid) return null

        await prisma.user.update({
          where: { id: user.id },
          data: { lastLogin: new Date() },
        })

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          office: user.office,
          companyId: user.companyId

        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id
        // @ts-expect-error authError
        token.companyId = user.companyId
      }
      return token
    },

    async session({ session, token }) {
      if (session?.user && token?.sub) {
        const userInDb = await prisma.user.findUnique({
          where: { id: token.sub },
          select: {
            id: true,
            name: true,
            email: true,
            office: true,
            phone: true,
            department: true,
            description: true,
            companyId: true,

            //password: true
          },
        })

        if (userInDb) {
          session.user = userInDb
        }
      }

      return session
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.JWT_SECRET,
}