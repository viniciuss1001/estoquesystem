import NextAuth from "next-auth"
import { authOptions } from "@/lib/authOptions" // mova a config para esse arquivo se ainda não moveu

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
