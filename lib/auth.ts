import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
import CredentialsProvider from "next-auth/providers/credentials"
import { compare } from "bcryptjs";
import { signToken } from "./jwt"
import prisma from "./prisma";

async function getUserByEmail(email: string) {
    try {
        const user = await prisma.user.findUnique({
            where: { email },
            select: {
                id: true,
                email: true,
                name: true,
                hashedPassword: true,
                image: true,
            },
        })
        return user
    } catch (error) {
        console.error("Error fetching user:", error)
        return null
    }
}

async function upsertUser(data: {
    email: string
    name?: string | null
    image?: string | null
}) {
    try {
        const user = await prisma.user.upsert({
            where: { email: data.email },
            update: {
                name: data.name,
                image: data.image,
            },
            create: {
                email: data.email,
                name: data.name,
                image: data.image,
            },
        })
        return user
    } catch (error) {
        console.error("Error upserting user:", error)
        return null
    }
}

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code",
                },
            },
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID!,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {

                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Invalid credentials")
                }
                const user = await getUserByEmail(credentials.email)

                if (!user || !user.hashedPassword) {
                    throw new Error("Invalid credentials")
                }

                const isPasswordValid = await compare(credentials.password, user.hashedPassword)

                if (!isPasswordValid) {
                    throw new Error("Invalid credentials")
                }

                return {
                    id: user.id,
                    email: user.email,
                    name: user.name ?? undefined,
                    image: user.image ?? undefined,
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user, account }) {
            // Add user info to token on sign in
            if (user) {
                token.id = user.id
                token.email = user.email
                token.name = user.name

                // Add provider info
                if (account) {
                    token.provider = account.provider
                    token.accessToken = account.access_token
                }

                // Generate custom JWT if needed
                const customJWT = signToken({
                    userId: user.id,
                    email: user.email,
                })

                token.customJWT = customJWT
            }
            return token
        },
        async session({ session, token }) {
            if (token && session.user) {
                session.user.id = token.id as string
                session.user.provider = token.provider as string
                session.accessToken = token.accessToken as string
                session.customJWT = token.customJWT as string
            }
            return session
        },
        async signIn({ user, account, profile }) {

            if (account?.provider === "google" || account?.provider === "facebook") {
                const dbUser = await upsertUser({
                    email: user.email!,
                    name: user.name,
                    image: user.image,
                })
                if (dbUser && profile) {
                    try {
                        await prisma.account.upsert({
                            where: {
                                provider_providerAccountId: {
                                    provider: account.provider,
                                    providerAccountId: account.providerAccountId,
                                },
                            },
                            update: {
                                access_token: account.access_token,
                                refresh_token: account.refresh_token,
                                expires_at: account.expires_at,
                            },
                            create: {
                                userId: dbUser.id,
                                type: account.type,
                                provider: account.provider,
                                providerAccountId: account.providerAccountId,
                                access_token: account.access_token,
                                refresh_token: account.refresh_token,
                                expires_at: account.expires_at,
                                token_type: account.token_type,
                                scope: account.scope,
                                id_token: account.id_token,
                                session_state: account.session_state,
                            },
                        })
                    } catch (error) {
                        console.error("Error creating account:", error)
                    }
                }
                return !!dbUser
            }
            return true
        },
        async redirect({ url, baseUrl }) {
            if (url.includes("/login")) {
                return baseUrl + "/dashboard"
            }

            if (url.startsWith("/")) {
                return `${baseUrl}${url}`
            }
            else if (new URL(url).origin === baseUrl) return url;
            return baseUrl + '/dashboard';
        },
    },
    pages: {
        signIn: "/login",
        error: "/login", // Error code passed in query string as ?error=
    },
    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === "development",
    session: {
        maxAge: 30 * 60 * 60 * 24, // 30 days
        strategy: "jwt",
    },
}