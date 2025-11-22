// middleware.ts (in root directory)
import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

const protectedRoutes = [
    "/dashboard",
    "/profile",
    "/settings",
];

export default withAuth(
    function middleware(req) {
        const token = req.nextauth.token;
        const pathname = req.nextUrl.pathname;

        const isProtected = protectedRoutes.some((route) =>
            pathname.startsWith(route)
        );

        // If route is protected and no token, redirect to login
        if (isProtected && !token) {
            return NextResponse.redirect(
                new URL(
                    `/login?callbackUrl=${encodeURIComponent(pathname)}`,
                    req.url
                )
            );
        }

        // Redirect authenticated users away from auth pages
        if ((pathname === "/login" || pathname === "/register") && token) {
            return NextResponse.redirect(new URL("/dashboard", req.url));
        }

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
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public folder
         */
        "/((?!_next/static|_next/image|favicon.ico|public).*)",
    ],
};
