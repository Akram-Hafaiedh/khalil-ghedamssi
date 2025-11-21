// types/next-auth.d.ts
import NextAuth, { DefaultSession } from "next-auth"
import { JWT } from "next-auth/jwt"

declare module "next-auth" {
    interface Session {
        user: {
            id: string
            provider?: string
        } & DefaultSession["user"]
        accessToken?: string
        customJWT?: string
    }

    interface User {
        id: string
        email: string
        name?: string
        hashedPassword?: string
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id: string
        provider?: string
        accessToken?: string
        customJWT?: string
    }
}