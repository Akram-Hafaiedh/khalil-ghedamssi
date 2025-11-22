import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
    try {
        const users = await prisma.user.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                image: true,
                emailVerified: true,
                createdAt: true,
            },
        })
        return NextResponse.json(users)
    } catch (error) {
        console.error('Failed to fetch users:', error)
        return NextResponse.json(
            { error: 'Failed to fetch users' },
            { status: 500 }
        )
    }
}

export async function POST(request: NextRequest) {
    try {
        const { email, name, image } = await request.json()

        if (!email) {
            return NextResponse.json(
                { error: 'Email is required' },
                { status: 400 }
            )
        }

        const user = await prisma.user.create({
            data: {
                email,
                name: name || null,
                image: image || null,
            },
        })

        return NextResponse.json(user, { status: 201 })
    } catch (error: any) {
        console.error('Failed to create user:', error)

        // Handle unique constraint errors
        if (error.code === 'P2002') {
            return NextResponse.json(
                { error: 'Email already exists' },
                { status: 409 }
            )
        }

        return NextResponse.json(
            { error: 'Failed to create user' },
            { status: 500 }
        )
    }
}