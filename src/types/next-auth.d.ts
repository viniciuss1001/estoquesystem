// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth, { DefaultSession, DefaultUser } from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      name?: string | null
      email?: string | null
      image?: string | null
      office: string
      phone?: string | null
      department?: string | null
      description?: string | null
      companyId: string | null
    }
  }

  interface User extends DefaultUser {
    companyId: string | null
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
    office: string
    companyId: string 
  }
}
