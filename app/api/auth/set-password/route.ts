// app/api/auth/set-password/route.ts
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import prisma from '@/lib/prisma';

export async function POST(req: NextRequest) {
    try {
        const { token, email, password } = await req.json();

        // Validate input
        if (!token || !email || !password) {
            return NextResponse.json(
                { error: 'Tous les champs sont requis' },
                { status: 400 }
            );
        }

        if (password.length < 8) {
            return NextResponse.json(
                { error: 'Le mot de passe doit contenir au moins 8 caractères' },
                { status: 400 }
            );
        }

        // Verify token
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
                { error: 'Token invalide' },
                { status: 404 }
            );
        }

        if (verificationToken.expires < new Date()) {
            await prisma.verificationToken.delete({
                where: {
                    identifier_token: {
                        identifier: email,
                        token: token,
                    },
                },
            });

            return NextResponse.json(
                { error: 'Token expiré. Veuillez demander un nouveau lien.' },
                { status: 410 }
            );
        }

        // Find user
        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            return NextResponse.json(
                { error: 'Utilisateur non trouvé' },
                { status: 404 }
            );
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 12);

        // Update user: set password and unlock account
        await prisma.$transaction([
            // Set password and unlock account
            prisma.user.update({
                where: { id: user.id },
                data: {
                    hashedPassword: hashedPassword,
                    lockedAt: null,
                    lockedReason: null,
                    scheduledDeletionAt: null,
                },
            }),

            // Delete the used token
            prisma.verificationToken.delete({
                where: {
                    identifier_token: {
                        identifier: email,
                        token: token,
                    },
                },
            }),
        ]);

        console.log(`✅ User ${user.id} (${email}) successfully recovered account`);

        return NextResponse.json({
            success: true,
            message: 'Mot de passe défini avec succès',
        });
    } catch (error) {
        console.error('Set password error:', error);
        return NextResponse.json(
            { error: 'Erreur lors de la définition du mot de passe' },
            { status: 500 }
        );
    }
}