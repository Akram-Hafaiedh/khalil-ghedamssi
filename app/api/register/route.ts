import { NextRequest, NextResponse } from "next/server"
import { hash } from "bcryptjs"
import prisma from "@/lib/prisma"
import { RegistrationSchema } from "@/validation/auth";

export async function POST(request: NextRequest) {
    try {

        const body = await request.json();

        // Validation
        const validation = RegistrationSchema.safeParse(body);

        if (!validation.success) {
            // Zod handles all error messaging and structures them nicely
            return NextResponse.json(
                {
                    error: "Validation failed",
                    issues: validation.error.flatten().fieldErrors
                },
                { status: 400 }
            );
        }
        const { email, password, name } = validation.data;

        // Check if user exists
        const existingUser = await prisma.user.findUnique({
            where: { email },
        })

        if (existingUser) {
            return NextResponse.json(
                { error: "User already exists" },
                { status: 409 }
            )
        }

        // Hash password
        const hashedPassword = await hash(password, 10)

        // Create user
        const user = await prisma.user.create({
            data: {
                email,
                name: name || null,
                hashedPassword,
            },
            select: {
                id: true,
                email: true,
                name: true,
                image: true,
            },
        })

        return NextResponse.json(
            {
                message: "User created successfully",
                user,
            },
            { status: 201 }
        )
    } catch (error) {
        console.error("Registration error:", error)

        if (error instanceof Error && error.message.includes("Unique constraint failed")) {
            return NextResponse.json(
                { error: "Email already registered" },
                { status: 409 }
            );
        }
        return NextResponse.json(
            { error: "Registration failed" },
            { status: 500 }
        )
    }
}
