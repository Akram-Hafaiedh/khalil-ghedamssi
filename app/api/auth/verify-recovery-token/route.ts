// app/api/auth/verify-recovery-token/route.ts
import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const token = searchParams.get('token');
        const email = searchParams.get('email');

        if (!token || !email) {
            return NextResponse.json(
                { valid: false, error: 'Token et email requis' },
                { status: 400 }
            );
        }

        // Find the verification token
        const verificationToken = await prisma.verificationToken.findUnique({
            where: {
                identifier_token: {
                    identifier: email,
                    token: token,
                },
            },
        });

        if (!verificationToken) {
            return NextResponse.json(
                { valid: false, error: 'Token invalide' },
                { status: 404 }
            );
        }

        // Check if token is expired
        if (verificationToken.expires < new Date()) {
            // Clean up expired token
            await prisma.verificationToken.delete({
                where: {
                    identifier_token: {
                        identifier: email,
                        token: token,
                    },
                },
            });

            return NextResponse.json(
                { valid: false, error: 'Token expiré' },
                { status: 410 }
            );
        }

        // Get user information
        const user = await prisma.user.findUnique({
            where: { email },
            select: {
                id: true,
                name: true,
                lockedReason: true,
                scheduledDeletionAt: true,
            },
        });

        if (!user) {
            return NextResponse.json(
                { valid: false, error: 'Utilisateur non trouvé' },
                { status: 404 }
            );
        }

        // Extract provider from lockedReason (e.g., "facebook_disconnected_no_alt_auth")
        const provider = user.lockedReason?.split('_')[0] || 'unknown';

        return NextResponse.json({
            valid: true,
            userName: user.name,
            provider: provider,
            deletionDate: user.scheduledDeletionAt,
            daysRemaining: user.scheduledDeletionAt
                ? Math.ceil(
                    (new Date(user.scheduledDeletionAt).getTime() - Date.now()) /
                    (1000 * 60 * 60 * 24)
                )
                : null,
        });
    } catch (error) {
        console.error('Token verification error:', error);
        return NextResponse.json(
            { valid: false, error: 'Erreur serveur' },
            { status: 500 }
        );
    }
}