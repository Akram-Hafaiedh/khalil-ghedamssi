import jwt, { JwtPayload, SignOptions } from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET || process.env.NEXTAUTH_SECRET!

/**
 * Sign a JWT token
 */
export function signToken(payload: JwtPayload, expiresIn: string = "7d"): string {
    return jwt.sign(payload, JWT_SECRET, {
        expiresIn: expiresIn as SignOptions["expiresIn"],
        issuer: "khalil-ghedamssi",
    })
}


/**
 * Verify and decode a JWT token
 */
export function verifyToken(token: string): JwtPayload | null {
    try {
        const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload
        return decoded
    } catch (error) {
        console.error("JWT verification failed:", error)
        return null
    }
}

/**
 * Decode JWT without verification (use with caution)
 */
export function decodeToken(token: string): JwtPayload | null {
    try {
        const decoded = jwt.decode(token) as JwtPayload
        return decoded
    } catch (error) {
        console.error("JWT decode failed:", error)
        return null
    }
}

/**
 * Generate a refresh token
 */
export function generateRefreshToken(userId: string): string {
    return jwt.sign(
        { userId, type: "refresh" },
        JWT_SECRET,
        { expiresIn: "30d" }
    )
}


/**
 * Verify refresh token
 */
export function verifyRefreshToken(token: string): { userId: string } | null {
    try {
        const decoded = jwt.verify(token, JWT_SECRET) as any
        if (decoded.type !== "refresh") {
            return null
        }
        return { userId: decoded.userId }
    } catch (error) {
        console.error("Refresh token verification failed:", error)
        return null
    }
}