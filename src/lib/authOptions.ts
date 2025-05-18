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

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          office: user.office,
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.office = user.office
        token.email = user.email
      }
      return token
    },
    async session({ session, token }) {
      session.user.id = token.id as string
      session.user.office = token.office as string
      //session.token = token as string
      return session
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.JWT_SECRET,
}