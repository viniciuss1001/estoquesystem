import NextAuth, { DefaultSession, DefaultUser } from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      office: string
    } & DefaultSession["user"]
  }

  interface User extends DefaultUser {
    office: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
    office: string
  }
}