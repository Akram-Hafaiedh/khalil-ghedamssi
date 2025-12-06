// types/next-auth.d.ts
import NextAuth, { DefaultSession } from "next-auth"
import { JWT } from "next-auth/jwt"

declare module "next-auth" {
    /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
    interface Session {
        user: {
            id: string
            name: string
            email: string
            image?: string | null
            provider?: string
            role: string
        } & DefaultSession["user"]
        accessToken?: string
        customJWT?: string
    }

    interface User {
        id: string
        email: string
        name: string
        image?: string
        role: string
        hashedPassword?: string
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id: string
        email: string
        name?: string | null
        role: string
        provider?: string
        accessToken?: string
        customJWT?: string
    }
}