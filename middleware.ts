// middleware.ts (in root directory)
import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
    function middleware(req) {
        // Custom middleware logic here
        console.log("Token:", req.nextauth.token)
        return NextResponse.next()
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token,
        },
    }
)

export const config = {
    matcher: ["/private/dashboard/:path*", "/private/profile/:path*", "/private/settings/:path*"]
}
