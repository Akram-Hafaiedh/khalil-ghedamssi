import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
import CredentialsProvider from "next-auth/providers/credentials"
import { compare } from "bcryptjs";
import { signToken } from "./jwt"

// This is a mock function - replace with your actual database query
async function getUserByEmail(email: string) {
    // Replace with your database query
    // Example: return await prisma.user.findUnique({ where: { email } })
    return null
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
                    name: user.name,
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
            // Custom sign-in logic
            // You can check if user exists in database and create if not
            // Example:
            // const existingUser = await getUserByEmail(user.email)
            // if (!existingUser) {
            //   await createUser(user)
            // }

            return true // Return false to deny sign-in
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