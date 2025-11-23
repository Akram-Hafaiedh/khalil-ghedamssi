// proxy.ts (in root directory)
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

        if (pathname === "/") {
            if (token) {
                // Logged in users go to dashboard
                return NextResponse.redirect(new URL("/dashboard", req.url));
            } else {
                // Not logged in users go to login
                return NextResponse.redirect(new URL("/login", req.url));
            }
        }

        const isProtected = protectedRoutes.some((route) =>
            pathname.startsWith(route)
        );

        // If route is protected and no token, redirect to login
        if (isProtected && !token) {

            const loginUrl = new URL("/login", req.url);
            if (pathname !== "/login") {
                loginUrl.searchParams.set("callbackUrl", pathname);
            }
            return NextResponse.redirect(loginUrl);
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
