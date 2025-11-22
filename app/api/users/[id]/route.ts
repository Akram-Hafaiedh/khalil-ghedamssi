import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const user = await prisma.user.findUnique({
            where: { id: params.id },
            include: {
                accounts: true,
                sessions: true,
            },
        })

        if (!user) {
            return NextResponse.json(
                { error: 'User not found' },
                { status: 404 }
            )
        }

        return NextResponse.json(user)
    } catch (error) {
        console.error('Failed to fetch user:', error)
        return NextResponse.json(
            { error: 'Failed to fetch user' },
            { status: 500 }
        )
    }
}

export async function PUT(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const data = await request.json()

        const user = await prisma.user.update({
            where: { id: params.id },
            data: {
                name: data.name,
                image: data.image,
                emailVerified: data.emailVerified,
            },
        })

        return NextResponse.json(user)
    } catch (error: any) {
        if (error.code === 'P2025') {
            return NextResponse.json(
                { error: 'User not found' },
                { status: 404 }
            )
        }

        return NextResponse.json(
            { error: 'Failed to update user' },
            { status: 500 }
        )
    }
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        await prisma.user.delete({
            where: { id: params.id },
        })

        return NextResponse.json({ message: 'User deleted successfully' })
    } catch (error: any) {
        if (error.code === 'P2025') {
            return NextResponse.json(
                { error: 'User not found' },
                { status: 404 }
            )
        }

        return NextResponse.json(
            { error: 'Failed to delete user' },
            { status: 500 }
        )
    }
}