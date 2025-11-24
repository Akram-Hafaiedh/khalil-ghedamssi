// middleware.ts
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getToken } from "next-auth/jwt"

const protectedRoutes = [
    "/dashboard",
    "/profile",
    "/settings",
];

export async function proxy(req: NextRequest) {
    const pathname = req.nextUrl.pathname;
    
    // Get the token
    const token = await getToken({ 
        req, 
        secret: process.env.NEXTAUTH_SECRET 
    });

    console.log("Pathname:", pathname, "Has token:", !!token);

    // Redirect authenticated users away from auth pages
    if ((pathname === "/login" || pathname === "/register") && token) {
        return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    // Check if the current route is protected
    const isProtected = protectedRoutes.some((route) =>
        pathname.startsWith(route)
    );

    // If route is protected and no token, redirect to login
    if (isProtected && !token) {
        const loginUrl = new URL("/login", req.url);
        loginUrl.searchParams.set("callbackUrl", pathname);
        return NextResponse.redirect(loginUrl);
    }

    // Allow access to all other pages (public pages)
    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except:
         * - api/auth/* (NextAuth API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public folder
         */
        "/((?!api/auth|_next/static|_next/image|favicon.ico|public).*)",
    ],
};