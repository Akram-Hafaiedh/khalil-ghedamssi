// proxy.ts (middleware.ts)
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
            loginUrl.searchParams.set("callbackUrl", pathname);
            return NextResponse.redirect(loginUrl);
        }

        // Redirect authenticated users away from auth pages
        if ((pathname === "/login" || pathname === "/register") && token) {
            return NextResponse.redirect(new URL("/dashboard", req.url));
        }

        console.log("Token:", req.nextauth.token)
        return NextResponse.next()
    },
    {
        callbacks: {
            authorized: ({ token, req }) => {
                const pathname = req.nextUrl.pathname;

                // Allow unauthenticated access to login, register, and home
                if (pathname === "/" || pathname === "/login" || pathname === "/register") {
                    return true;
                }

                // For protected routes, require authentication
                const isProtected = protectedRoutes.some((route) =>
                    pathname.startsWith(route)
                );

                return !isProtected || !!token;
            },
        },
    }
)

export const config = {
    matcher: [
        "/((?!_next/static|_next/image|favicon.ico|public).*)",
    ],
};